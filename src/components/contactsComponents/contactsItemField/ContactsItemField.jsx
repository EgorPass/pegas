import { memo,  } from "react"

import "./contacts-field.scss"

import { FieldNameContainer } from "../fieldNameContainer/FieldNameContainer"
import { FieldContactsContainer } from "../fieldContactsContainer/FieldContactsContainer"
import { FieldPhotoContainer } from "../fieldPhotoContainer/FieldPhotoContainer"
import { FieldButtonContainer } from "../../commonComponents/fieldButtonContainer/FieldButtonContainer"

export const ContactsItemField = memo( ( {id, dataOfName, dataOfContacts, clickAtCloseButton, clickAtRemoveButton } ) => {

	console.log("ContactsItemField render... ")

	return (
		<div className = { `list-body__cover-field` }>
			<div className = "list-body__contacts-field contacts-field" >

				<div className = "contacts-field__left-side">
					<FieldNameContainer
						dataOfName = { dataOfName }
						/>

					<FieldPhotoContainer />
				</div>
				
				<div className = "contacts-field__right-side">

					<FieldContactsContainer
						dataOfContacts = { dataOfContacts }
						/>


					<FieldButtonContainer
						id = { id }
						classNameBlock = "contacts-field"
						clickAtCloseButton = { clickAtCloseButton }
						clickAtRemoveButton = { clickAtRemoveButton }
					/>
				</div>

			</div>
		</div>
	)
} )