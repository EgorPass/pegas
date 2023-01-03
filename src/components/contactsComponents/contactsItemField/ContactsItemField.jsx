import { useEffect } from "react"

import { useGetStore } from "../../../hooks/reduxHooks/useGetStore"

import { useContactsActions } from "../../../hooks/reduxHooks/useBindActions"

import { useFirebase } from "../../../hooks/componentsHooks/firebaseHooks/useFirebase"

import { useContactsItemField } from "../../../hooks/componentsHooks/contactsHooks/useContactsItemField"

import { Image } from "../../commonComponents/image/Image"

import { FieldButtonContainer } from "../../commonComponents/fieldButtonContainer/FieldButtonContainer"

import { FieldNameContainer } from "../fieldNameContainer/FieldNameContainer"
import { FieldContactsContainer } from "../fieldContactsContainer/FieldContactsContainer"


import "./contacts-field.scss"

export const ContactsItemField = ( ) => {

	// console.log("ContactsItemField render... ")

	
	const { contactName, contactData, contactId, contactPhoto, contactState } = useGetStore("contacts")
	const {
		changeName, changeSurName, changeSecondName,
		changePhone, changeTelegram, changeEmail,
		changeGitHub, changeOther,
		
		clickAtCloseButton, clickAtRemoveButton,

		clickAtAddImage,		clickAtRemoveImage,
	} = useContactsItemField();

	return (
		<div className = { `list-body__cover-field` }>
			<div className = "list-body__contacts-field contacts-field" >

				<FieldNameContainer
					contactName = { contactName }
					changeName = { changeName }
					changeSurName = { changeSurName }
					changeSecondName = { changeSecondName }
				/>
				
				<FieldContactsContainer
					contactData = { contactData }
					changePhone = { changePhone }
					changeTelegram = { changeTelegram }
					changeEmail = { changeEmail }
					changeGitHub = { changeGitHub }
					changeOther = { changeOther }
				/>
				
				<Image
					url = { contactPhoto.url }
					status = { contactPhoto.status }
					addImage = { true }
					classNameForImage =  "contacts-field__image"
					classNameForContainer = "contacts-field__image-container"
					clickAtAddImage	= { clickAtAddImage }
					clickAtRemoveImage = { clickAtRemoveImage }	
				/>
				
				<FieldButtonContainer
					id = { contactId }
					clickAtCloseButton = { clickAtCloseButton }
					clickAtRemoveButton = { clickAtRemoveButton }
				/>

			</div>
		</div>
	)
} 