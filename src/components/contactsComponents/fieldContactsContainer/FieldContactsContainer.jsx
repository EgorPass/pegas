import { memo, useMemo } from "react"
import { Anchor } from "../../commonComponents/anchor/Anchor"

import { InputField } from "../../commonComponents/inputField/InputField"

export const FieldContactsContainer = memo( ( { contactData, changePhone, changeTelegram, changeEmail, changeGitHub, changeOther, } ) => {

	console.log("FieldContactsContainer render...")

	const className = "contact-container"

		const dataOfContacts = [
				
				useMemo( () => ( {
					type: "phone",
					title: (
						<Anchor
							href={`tel:+7${contactData.phone.replace(/\s/gi, '').slice(-10)}`}
						>
							Телефон
							</Anchor>
					),
					content: contactData.phone  || "",
					onchange: changePhone
				} ), [ contactData.phone ] ),
				
				useMemo( () => ( {
					type: "text",
					title: (
						<Anchor
							href = { `https://t.me/${contactData.telegram.replace(/^@/gi, '') }` }
						>
							Телеграм
							</Anchor>
					),
					content: contactData.telegram  || "",
					onchange: changeTelegram
				} ), [ contactData.telegram ] ),
				
				useMemo( () => ( {
					type: "email",
					title: (
						<Anchor
							href = { `mailto:${contactData.email }` }
						>
							Email
							</Anchor>
					),
					content: contactData.email  || "",
					onchange: changeEmail
				} ), [ contactData.email ] ),
				
				useMemo( () => ( {
					type: "text",
					title: (
						<Anchor
							href = { `https://github.com/${ contactData.gitHub }` }
						>
							Профиль GitHub
						</Anchor>
					),
					content: contactData.gitHub  || "",
					onchange: changeGitHub 
				} ), [ contactData.gitHub ] ),
				
				useMemo( () => ( {
					type: "text",
					title: "друге",
					content: contactData.other  || "",
					onchange: changeOther
				} ), [ contactData.other ] ),
	]

	return (
		<div className = { `contacts-field__${ className } ${ className }` }>
			
			{
				dataOfContacts.map(
					(it, i) => (	
									<InputField
										key = { it.type + "-" + i }
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