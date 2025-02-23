import * as vscode from 'vscode';
import axios from 'axios';
import { AiCodeAuthState, AiCodeUserInfo } from './types';
import { aicodeAuthConfig } from './config';

export class AiCodeAuthService {
    private context: vscode.ExtensionContext;
    private _state: AiCodeAuthState = {
        isLoggedIn: false,
        userInfo: null
    };

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        this.restoreSession();
    }

    // 登录方法
    async login(username: string, password: string) {
        try {
            const response = await axios.post(`${aicodeAuthConfig.authServerUrl}/user/login`, {
                username,
                password
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.data) {
                const userInfo: AiCodeUserInfo = response.data;
                await this.setSession(userInfo.accessToken, userInfo);
                return true;
            }
            throw new Error('Login failed: Invalid response');
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }

    // 登出方法
    async logout() {
        try {
            const token = await this.context.secrets.get('aicodeAuthToken');
            if (token) {
                await axios.post(`${aicodeAuthConfig.authServerUrl}/user/logout`, null, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
            }
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            await this.clearSession();
        }
    }

    // 重置密码
    async resetPassword(email: string) {
        try {
            await axios.get(`${aicodeAuthConfig.authServerUrl}/reset_password`, {
                params: { email },
                headers: {
                    'Accept': 'application/json'
                }
            });
            return true;
        } catch (error) {
            console.error('Password reset request failed:', error);
            throw error;
        }
    }

    // 修改密码
    async changePassword(oldPassword: string, newPassword: string) {
        const token = await this.context.secrets.get('aicodeAuthToken');
        if (!token) {
            throw new Error('User not authenticated');
        }

        try {
            await axios.post(
                `${aicodeAuthConfig.authServerUrl}/user/change-password`,
                {
                    oldPassword,
                    newPassword
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            return true;
        } catch (error) {
            console.error('Password change failed:', error);
            throw error;
        }
    }

    // 初始化登录
    async initiateLogin() {
        const nonce = Buffer.from(Math.random().toString()).toString('base64');
        await this.context.secrets.store('aicodeAuthNonce', nonce);

        const authUrl = new URL(`${aicodeAuthConfig.authServerUrl}/authorize`);
        authUrl.searchParams.append('client_id', aicodeAuthConfig.clientId);
        authUrl.searchParams.append('redirect_uri', aicodeAuthConfig.redirectUri);
        authUrl.searchParams.append('state', nonce);
        authUrl.searchParams.append('response_type', 'token');

        await vscode.env.openExternal(vscode.Uri.parse(authUrl.toString()));
    }

    private async setSession(token: string, userInfo: AiCodeUserInfo) {
        await this.context.secrets.store('aicodeAuthToken', token);
        this._state = {
            isLoggedIn: true,
            userInfo
        };
        await vscode.commands.executeCommand('setContext', 'aiCode.isLoggedIn', true);
    }

    private async clearSession() {
        await this.context.secrets.delete('aicodeAuthToken');
        this._state = {
            isLoggedIn: false,
            userInfo: null
        };
        await vscode.commands.executeCommand('setContext', 'aiCode.isLoggedIn', false);
    }

    private async restoreSession() {
        const token = await this.context.secrets.get('aicodeAuthToken');
        if (token) {
            try {
                await this.validateToken(token);
            } catch (error) {
                console.error('Failed to restore session:', error);
                await this.clearSession();
            }
        }
    }

    private async validateToken(token: string) {
        try {
            const response = await axios.get(
                `${aicodeAuthConfig.authServerUrl}/validate`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const userInfo = response.data as AiCodeUserInfo;
            await this.setSession(token, userInfo);
        } catch (error) {
            console.error('Token validation failed:', error);
            throw error;
        }
    }

    get state(): AiCodeAuthState {
        return this._state;
    }
} 