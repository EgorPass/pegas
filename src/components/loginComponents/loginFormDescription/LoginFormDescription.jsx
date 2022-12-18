import { memo } from "react";

/**
 * Мемоизировнный компонент для создания описания поля
 * регистрации или входа в учетную запись
 * 
 * Параметры title и classMod формируются динамически в родитле (Компонент Login)
 * 
 * @param {string} nextProp.title - строка для описания,
 * @param {string} nextProp.classMod - строка модификатор для класса, выделеить шрифт если ввод в поля не корректный
 */
export const LoginFormDescription = memo( ( { title = "", classMod = "" } ) => {
	
		// console.log( "LoginFormDescription render...")

		return (
			<div
				className = {
					`login-body__form-description login-body__form-description${classMod}`
				}> {title} </div>
		)
	}
)