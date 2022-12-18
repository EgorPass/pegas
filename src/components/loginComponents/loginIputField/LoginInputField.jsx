import { memo } from "react"

/**
 * Мемоизированный компонент для создания полtq регистрации, для ввода email и пароля
 * 
 * Тип и подписи формируются в зависимости от переданных пропсов.
 * 
 * Пропсы content и classMod формируются динамически
 * 
 * Родительский компонент Login
 * 
 * @param {string} nextProp.title подпись для поля
 * @param {string} nextProp.content упраляемое содержимое для input
 * @param {string} nextProp.type тип для input
 * @param {string} nextProp.classMod модификатор стиля для поля и input если ввод в поле не корректен
 * @param {function} nextProp.onchange метод для изменения input и состояния login в стейтменеджере
 * @param {boolean} nextProp.autofocus булево значения для автофокуса input
 */
export const LoginInputField = memo(
	( { title, content, type, classMod, onchange, autofocus = false} ) => {
		
			// console.log("LoginInputField '" + title + "' render...")
			
		return (
			<div className = "login-body__field-container">
				<label>
					<fieldset className = { `login-body__field login-body__field${classMod}` }>
						<legend className = "login-body__field-description"> { title }:</legend>
						
							<input
							value={content}
							onChange={onchange}
							type={type}
							autoFocus={autofocus}
							autoComplete="true"
							className={`login-body__field-input login-body__field-input${classMod}`}
							/>
						
					</fieldset>
				</label>
			</div>

		)
	}
)