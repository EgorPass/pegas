import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useGetStore } from "../../reduxHooks/useGetStore";
import { useLoginActions, useAuthActions } from "../../reduxHooks/useBindActions";

export function useLogin() {

	const { setLogin, setPassword, setConfirmPassword } = useLoginActions();
	const { setError, loginAtFirebase, reginAtFirebase, logoutAtFirebase } = useAuthActions();
	const { login, password, confirmPassword } = useGetStore("login")
	const { error } = useGetStore("auth")

	const location = useLocation()
	const navigate = useNavigate();
	
	
	const changeLogin = useCallback(
		({ target: { value } }) => {
			if (error) setError("")
			setLogin(value)
		}
		, [login, error])


	const changePassword = useCallback(
		({ target: { value } }) => {
			setPassword(value)
			if (error) setError("");
		}
		, [password, error])
	

	const changeConfirmPassword = useCallback(
		({ target: { value } }) => {
			setConfirmPassword(value)
			if (error) setError("");
		}
		, [confirmPassword, error]);

	
	const navigateAfterAuth = (resultAuth, login) => {
		if (resultAuth.payload === login) {
			const pathname = location?.state?.from || "/"
			navigate(pathname, { replace: true })
		}
	}

	const loginButton = async (e) => {
		e.preventDefault();
		
		const res = await loginAtFirebase({ login, password })
		setPassword("")
		navigateAfterAuth(res, login)
	}

	const reginButton = async (e) => {		
		e.preventDefault();

		if ( password !== confirmPassword ) {
			setError( "wrong-confirm-password" )
			return;
		}

		const res = await reginAtFirebase({ login, password })
		setPassword("")
		setConfirmPassword("")

		navigateAfterAuth(res, login)
	}

	const logoutButton = useCallback( async (e) => {
		e.preventDefault();
		
		navigate("/", { replace: true })

		logoutAtFirebase()	
	}
	, [  ] )

	const resetLoginFields = useCallback( () => {
		setPassword("")
		setError('')
	}
	, [ ] )

	const errorCatcher = ( prevLocationState, errorModAndTitle) => {
		// сделать основной функцие по перехвату ошибок на странице Login.jsx
		// принимать ошибку, если нужен переход на страницу, делает переход, иначе вызывать функуцию classModAndTitleDescription и возвращать объект с модификаторами
		
		prevLocationState = prevLocationState || {}
		
		if (/too-many-requests/gi.test(error)) {
			setError('')
			
			navigate(
				"/404",
				{
					state: {
						...prevLocationState,
						errorName: error,
						errorMessage: `Много частых попыток войти с неправильным паролем для логина ${ login }. \n Попробуйте вспомнить пароль для логина ${ login } и повторите попытку.`,
					}
				}
			)
			return;
		}		
	}

	const classModAndTitleDescription =useCallback(
			(error) => {
		
		let title = ""
		let titleClassMod = ""
		let loginClassMod = ""
		let passClassMod = ""
		let confClassMod = ""
		let mod = "_error"
		
		const errorString =
			error
				.match(/(user-not-found)|(invalid-email)|(wrong-password)|(weak-password)|(email-already-in-use)|(email-already-in-use)|(wrong-confirm-password)|(internal-error)/gi)
		
		if (errorString) {
			titleClassMod = mod;

			switch (errorString.toString().toLowerCase()) {
				
				case "internal-error":
					title = `Заполните пожалуйста корректно поля для регистрации`;
					loginClassMod = mod;
					passClassMod = mod;
					break;

				case "user-not-found":
					title = `Пользователь с логином ${login} не найден`;
					loginClassMod = mod;
					break;
								
				case "invalid-email":
					title = `Неверно введен адрес электронной почты ${login} !!!`
					loginClassMod = mod;
					break;
				
				case "email-already-in-use":
					title = `Пользователь с логином ${login} уже существует`
					loginClassMod = mod;
					break;
				
				case "wrong-password":
					title = `Неверно введн пароль для пользователя ${login}`
					passClassMod = mod;
					break;
				
				case "weak-password":
					title = "Пароль должен состоять минимум из 6 символов"
					passClassMod = mod;
					break;
				
				case "wrong-confirm-password":
					title = "Подтверждение пароля не совпадает с введеным паролем"
					confClassMod = mod
					break;

				default: title = ""; 
			}
		}
			
		return {
			title,
			loginClassMod,
			titleClassMod,
			passClassMod,
			confClassMod,
		}

	}
	, [] )

	return {

		changeLogin,
		changePassword,
		changeConfirmPassword,
		resetLoginFields,

		loginButton,
		reginButton,
		logoutButton, 

		errorCatcher,

		classModAndTitleDescription
	}

}