import { useGetStore } from "../../../hooks/reduxHooks/useGetStore"

import { useContactsItemField } from "../../../hooks/componentsHooks/contactsHooks/useContactsItemField"

import { ImageContact } from "../../commonComponents/image/ImageContact"
import { FileLoader } from "../../commonComponents/fileLoader/FileLoader"
import { FieldButtonContainer } from "../../commonComponents/fieldButtonContainer/FieldButtonContainer"

import { FieldNameContainer } from "../fieldNameContainer/FieldNameContainer"
import { FieldContactsContainer } from "../fieldContactsContainer/FieldContactsContainer"

import "./contacts-field.scss"

export const ContactsItemField = () => {

	// console.log("ContactsItemField render... ")

	const { contactName, contactData, contactId, contactPhoto, uploadFile } = useGetStore("contacts")
	const {
		changeName, changeSurName, changeSecondName,
		changePhone, changeTelegram, changeEmail,
		changeGitHub, changeOther,
		
		clickAtCloseButton, clickAtRemoveButton,

		clickAtAddImage, clickAtRemoveImage,
	} = useContactsItemField();

	const upload = uploadFile?.[contactId]?.[contactPhoto.fileId] || null

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
				
				<ImageContact
					urlPhoto = { contactPhoto.url }
					path = { contactPhoto.path }
					fileId = { contactPhoto.fileId }
					name = { contactPhoto.name }
					uploadFile = { upload }
					addImage = { true }
					contactId = { contactId }
					classNameForImage =  "contacts-field__image"
					classNameForContainer = "contacts-field__image-container"
					clickAtAddImage	= { clickAtAddImage }
					clickAtRemoveImage = { clickAtRemoveImage }	
				>
					{
						upload &&
						<FileLoader progress={(upload !== null && upload.progress) || null} >
								Загрузка...
						</FileLoader>
					}
						</ImageContact>
				
				<FieldButtonContainer
					id = { contactId }
					clickAtCloseButton = { clickAtCloseButton }
					clickAtRemoveButton = { clickAtRemoveButton }
				/>

			</div>
		</div>
	)
} 