import { memo } from "react";

import { InputField } from "../../../components/commonComponents/inputField/InputField";

export const FieldNameContainer = memo( ( {  contactName, changeName, changeSurName, changeSecondName, } ) => {


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
	
	// console.log( "FieldNameContainer render... ")


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