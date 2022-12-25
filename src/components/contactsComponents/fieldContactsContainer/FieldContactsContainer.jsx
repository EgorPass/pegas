import { memo } from "react"


import { InputField } from "../../commonComponents/inputField/InputField"

export const FieldContactsContainer = memo( ( { dataOfContacts } ) => {

	const className = "contact-container"

	return (
		<div className = { `contacts-field__${ className } ${ className }` }>
			
			{
				dataOfContacts.map( it => (	
																	<InputField
																		key = { it.title}
																		type = { it.type }
																		title = { it.title }
																		content = { it.content }
																		onchange = { it.onchange }
																		autofocus = { false }
																		autocomplite = "off"
																		classNameBlock = { className }
																	/>
																)
				)
			}

		</div>

	)

} )