export interface AiCodeUserInfo {
	id: string
	displayName: string | null
	email: string | null
	photoURL: string | null
	accessToken: string
}

export interface AiCodeAuthState {
	isLoggedIn: boolean
	userInfo: AiCodeUserInfo | null
}

export interface AiCodeAuthConfig {
	authServerUrl: string
	clientId: string
	redirectUri: string
}

export interface LoginResponse {
	token: string
	userInfo: AiCodeUserInfo
}

export interface PasswordChangeRequest {
	oldPassword: string
	newPassword: string
}
