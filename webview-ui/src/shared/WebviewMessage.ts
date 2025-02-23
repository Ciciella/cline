export interface WebviewMessage {
	type: "auth"
	action?: "login" | "register" | "loginSuccess" | "logoutSuccess" | "resetPassword" | "verification"
	data?: {
		email: string
		username?: string
		password?: string
		password2?: string
		verification_code?: string
		turnstile?: string
		aff_code?: string
	}
	url?: string
	text?: string
	success?: boolean
	message?: string
}
