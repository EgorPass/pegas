import { memo } from "react";

import { InputField } from "../../commonComponents/inputField/InputField";

/**
 * Мемоизированный компонент контейнер для отрисовки списка полей с информацией о конакте: Фамилия, Имя и Отчество.
 * 
 * Обязательно одно из полей
 * 
 * @param {number} nextPpops.id - индификатор контакта
 * @param {string} nextProps.name - имя контакта
 * @param {string} nextProps.surName - фамилия контакта
 * @param {string} nextProps.secondName - отчество контакта
 * @param {string} nextProps.changeName - метод изменения имени
 * @param {string} nextProps.changeSurName - метод изменения фамилии
 * @param {string} nextProps.changeSecondName - мтеод изменения отчества
 * @returns
 */
export const FieldNameContainer = memo( ( { dataOfName } ) => {

	const className = "name-container"
	
	return (
		<div className={`contacts-field__${ className } ${ className }`}>
			
			{
				dataOfName.map( it => (
															<InputField
																	key = { it.title }
																	title = { it.title }
																	content = { it.content }
																	onchange = { it.onchange }
																	autofocus = { false }
																	autocomplite = "off"
																	classNameBlock = { className }
															/>		
				))

			}

		</div>

	)
} )