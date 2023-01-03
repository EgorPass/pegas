import { memo } from "react";

import { InputField } from "../../../components/commonComponents/inputField/InputField";

/**
 * Мемоизированный компонент контейнер для отрисовки списка полей с информацией о конакте: Фамилия, Имя и Отчество.
 * 
 * У себя формирует массив на основе переданного состояния contactName и методоы изменения полей 
 * из которого строит поля для контакта
 * 
 * Обязательно поле name || surName
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
export const FieldNameContainer = memo( ( {  contactName, changeName, changeSurName, changeSecondName, } ) => {

	// console.log("FieldNameContainer render... ");

	const className = "name-container"
	
	const dataOfName = [
				{
					title: "Имя",
					content: contactName.name || "",
					onchange: changeName
				},
				{
					title: "Фамилия",
					content: contactName.surName  || "",
					onchange: changeSurName
				},
				{

					title: "Отчество",
					content: contactName.secondName  || "",
					onchange: changeSecondName
				}
	]
	
	return (
		<div className={`contacts-field__${ className } ${ className }`}>
			{
				dataOfName.map(
					it => (
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