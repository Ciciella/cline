import { VSCodeButton, VSCodeTextField } from "@vscode/webview-ui-toolkit/react";
import { useState } from "react";
import { vscode } from "../../utils/vscode";

interface LoginFormProps {
    onClose: () => void;
}

export const LoginForm = ({ onClose }: LoginFormProps) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isReset, setIsReset] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            if (isReset) {
                // 重置密码逻辑
                vscode.postMessage({
                    type: "auth",
                    action: "resetPassword",
                    data: { email }
                });
                return;
            }

            if (isLogin) {
                // 登录逻辑
                vscode.postMessage({
                    type: "auth",
                    action: "login",
                    data: { email: username, username: username, password }
                });
                // 登录请求已发送，等待响应
                // 响应处理在AuthView组件中
            } else {
                // 注册逻辑
                vscode.postMessage({
                    type: "auth", 
                    action: "register",
                    data: { email, username, password }
                });
            }
        } catch (error) {
            console.error("认证失败:", error);
        }
    };

    const renderForm = () => {
        if (isReset) {
            return (
                <>
                    <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
                        重置密码
                    </h2>
                    <div style={{ marginBottom: "15px" }}>
                        <VSCodeTextField
                            type="email"
                            placeholder="请输入邮箱地址"
                            value={email}
                            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
                            style={{ width: "100%" }}
                        />
                    </div>
                </>
            );
        }

        return (
            <>
                <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
                    {isLogin ? "登录" : "注册"}
                </h2>
                
                {!isLogin && (
                    <div style={{ marginBottom: "15px" }}>
                        <VSCodeTextField
                            type="email"
                            placeholder="邮箱地址"
                            value={email}
                            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
                            style={{ width: "100%" }}
                        />
                    </div>
                )}

                <div style={{ marginBottom: "15px" }}>
                    <VSCodeTextField
                        placeholder="用户名/邮箱"
                        value={username}
                        onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
                        style={{ width: "100%" }}
                    />
                </div>

                <div style={{ marginBottom: "20px" }}>
                    <VSCodeTextField
                        type="password"
                        placeholder="密码"
                        value={password}
                        onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                        style={{ width: "100%" }}
                    />
                </div>
            </>
        );
    };

    return (
        <div style={{
            padding: "20px",
            maxWidth: "400px",
            margin: "0 auto"
        }}>
            {renderForm()}

            <div style={{ 
                display: "flex", 
                justifyContent: "space-between",
                marginBottom: "15px",
                flexDirection: "row"
            }}>
                <VSCodeButton
                    onClick={handleSubmit}
                    style={{ width: "45%" }}
                >
                    {isReset ? "发送重置邮件" : (isLogin ? "登录" : "注册")}
                </VSCodeButton>
                <VSCodeButton
                    onClick={onClose}
                    style={{ width: "45%" }}
                >
                    取消
                </VSCodeButton>
            </div>

            <div style={{ textAlign: "center" }}>
                {!isReset && (
                    <div style={{ marginBottom: "10px" }}>
                        <span 
                            onClick={() => setIsLogin(!isLogin)}
                            style={{ 
                                cursor: "pointer",
                                color: "var(--vscode-textLink-foreground)"
                            }}
                        >
                            {isLogin ? "没有账号? 点击注册" : "已有账号? 点击登录"}
                        </span>
                    </div>
                )}
                <div>
                    <span 
                        onClick={() => {
                            setIsReset(!isReset);
                            setPassword("");
                            setUsername("");
                        }}
                        style={{ 
                            cursor: "pointer",
                            color: "var(--vscode-textLink-foreground)"
                        }}
                    >
                        {isReset ? "返回登录" : "忘记密码？点击重置"}
                    </span>
                </div>
            </div>
        </div>
    );
}; 