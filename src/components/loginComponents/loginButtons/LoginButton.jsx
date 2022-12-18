
/**
 * Компонент рисует кнопку в разделе регистрации или входа.
 * 
 * Не мемоизируем зависит от введенных свойств login и password состояния login
 * 
 * Обработчик клика ставиться взависимости на какой странице находиться кнопка, если на /login то принимает метод loginButton, а если /regin то reginButton
 * 
 * @param {object} param0
 * @param {string} param0.title
 * @param {function} param0.onclick
 * 
 * @param title название для кнопки
 * @param onclick обработчик для клика, зависит от родительского пропса regin
 * @returns 
 */
export const LoginButton = ({title, onclick}) => {

	return (
		<button
			className = "login-body__button"
			onClick={onclick}
			type = "submit"
		>
			{ title }
		</button>
	)
}