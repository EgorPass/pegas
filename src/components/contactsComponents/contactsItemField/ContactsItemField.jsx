import { memo,  } from "react"



import { FieldNameContainer } from "../fieldNameContainer/FieldNameContainer"
import { FieldContactsContainer } from "../fieldContactsContainer/FieldContactsContainer"
import { FieldPhotoContainer } from "../fieldPhotoContainer/FieldPhotoContainer"
import { FieldButtonContainer } from "../../commonComponents/fieldButtonContainer/FieldButtonContainer"

export const ContactsItemField = memo( ( {id, dataOfName, dataOfContacts, clickAtCloseButton, clickAtRemoveButton } ) => {


	return (
		<div className = { `contacts-body__contacts-cover` }>
			<div className = "contacts-body__contacts-field contacts-field" >
			
				<FieldNameContainer
					dataOfName = { dataOfName }
				/>

				<FieldContactsContainer
					dataOfContacts = { dataOfContacts }
				/>

				<FieldPhotoContainer />

				<FieldButtonContainer
					id = { id }
					classNameBlock = "contacts-field"
					clickAtCloseButton = { clickAtCloseButton }
					clickAtRemoveButton = { clickAtRemoveButton }
				/>

			</div>
		</div>
	)
} )