import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useGetStore } from '../../hooks/reduxHooks/useGetStore'
import { useLoginContext } from "../../hooks/context/useContextData";
import { useLogin } from "../../hooks/componentsHooks/loginHooks/useLogin";

import { useRefference } from "../../hooks/componentsHooks/ref/useRefference";

import { LoginButton } from '../../components/loginComponents/loginButtons/LoginButton'
import { InputField } from "../../components/commonComponents/inputField/InputField"
import { LoginFormDescription } from '../../components/loginComponents/loginFormDescription/LoginFormDescription'
import { LoginLinksContainer } from "../../components/loginComponents/loginLinksContainer/LoginLinksContainer";


import "./login.scss"

/**
 * Компонент рисует страницы входа и регистрации, в зависимости от переданного параметра, на роутах с разными path, но с одинаковым компонентом.
 * 
 * Формирует title для LoginFormDescription и модификаторы классов для полей ввода, в случае ошибки.
 * 
 * В зависимости от своего пропса regin, в компонент кнопки передает 
 * loginButton или reginButton
 * 
 * При частом обращении перелогирования на одном логине перекинет на страницу с ошибкой.
 * 
 * @param {object} param0
 * @param {boolean} param0.regin
 * @param regin флаг для формирования страници регистрации.
 *  
 * @returns 
 */
const Login = ( {  regin = false } ) => {

	const { error } = useGetStore("auth");	
	const { login, password, confirmPassword } = useGetStore("login");
	const {
		changeLogin,
		changePassword,
		changeConfirmPassword,
		resetLoginFields,
		loginButton,
		reginButton,
		errorCatcher,
		classModAndTitleDescription,
	} = useLoginContext();


	const { state } = useLocation()
	
	useEffect(() => {
		 errorCatcher( state, )
	}, [  error ] )

	const {
		titleClassMod, loginClassMod,
		confClassMod, 	passClassMod,	title,
	} = useMemo( () => classModAndTitleDescription( error ), [ error ] )

	const formDescription = title ? title :
		regin ?
			"В качестве логина ввдедите email и придумайте пароль минимум из 6 символов" :
			"Введите логин и пароль Вашей учетной записи" 
	
	return (
		<div className = "pegas-body__login-body login-body">

			<div className = "login-body__form-container">
				
				<LoginFormDescription
					classMod = {titleClassMod  }
					title = {	formDescription  }
				/>
				
				<form >

					<InputField
						title = "Логин"
						content = { login }
						onchange = { changeLogin }
						type = "text"
						autofocus = { true}
						autocomplite = "off"
						classMod = { loginClassMod }
						classNameBlock = "login-body"
					/>

					<InputField
						title = "Пароль"
						content = { password }
						onchange = { changePassword }
						type = "password"
						autofocus = { false }
						autocomplite = "off"
						classMod = { passClassMod }
						classNameBlock = "login-body"
					/>

					{
						regin &&
						<InputField
							title = "Подтвердите пароль"
							content = { confirmPassword }
							onchange = { changeConfirmPassword }
							type = "password"
							autofocus = { false }
							autocomplite = "off"
							classMod = { confClassMod  }
							classNameBlock = "login-body"

						/>
					}

					<div className = "login-body__button-container">
						
						<LoginLinksContainer
							regin = { regin }
							onclick = { resetLoginFields }
						/>
						
						<LoginButton
							title = { regin ? "Ok" : "Войти" }
							onclick = { regin ? reginButton : loginButton }
						/>

					</div>
					
				</form>
			</div>
		
		</div>
	)
}

export default Login