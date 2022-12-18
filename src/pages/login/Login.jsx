import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useGetStore } from '../../hooks/reduxHooks/useGetStore'
import { useLoginContext } from "../../hooks/context/useContextData";

import { LoginButton } from '../../components/loginComponents/loginButtons/LoginButton'
import { LoginInputField } from '../../components/loginComponents/loginIputField/LoginInputField'
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
export const Login = ( { regin = false } ) => {
	
	// console.log("login render...")

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
		<main className = "pegas-body__login-body login-body">

			<div className = "login-body__form-container">
				
				<LoginFormDescription
					classMod = {titleClassMod  }
					title = {	formDescription  }
				/>
				
				<form >

					<LoginInputField
						title = "Логин"
						content = { login }
						onchange = { changeLogin }
						type = "text"
						autofocus = { true }
						classMod = { loginClassMod }
					/>

					<LoginInputField
						title = "Пароль"
						content = { password }
						onchange = { changePassword }
						type = "password"
						classMod = { passClassMod }
					/>

					{
						regin &&
						<LoginInputField
							title = "Подтвердите пароль"
							content = { confirmPassword }
							onchange = { changeConfirmPassword }
							type = "password"
							classMod = { confClassMod  }
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
		
		</main>
	)
}