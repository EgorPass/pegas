import { useCallback } from "react"
import { useGetStore } from "../../reduxHooks/useGetStore";
import { useContactsActions } from "../../reduxHooks/useBindActions";

import { useFirebase } from "../firebaseHooks/useFirebase";

import { useContactsItemField } from "./useContactsItemField";

import placeholder from "../../../images/placeholder.svg"
import noFoto from "../../../images/no-foto.png"

export function useContactsItemList(  ) {

	const { setFieldAtDatabase } = useFirebase();
	const { user } = useGetStore("auth")
	const {
		contacts,		contactState, contactId,
		contactName, contactData, contactPhoto
	} = useGetStore("contacts")
	
	const { 
					setNameData,
					setContactId,
					setContactData,
					setOpenContact,
					setContactPhotoStore
																														} = useContactsActions()

	const { clickAtCloseButton } = useContactsItemField()


	const clickAtTitle = useCallback( async( id ) => {
		
		const contact = contacts.find(it => it.contactId === id)		
		if (!contact) return;
		
		if( contactId === contact.contactId ) return;
		
		if (contactState.openContact) { 
			clickAtCloseButton()
		}
		
		setContactId(contact.contactId)
		setNameData( contact.contactName )
		setContactData(contact.contactData)
		setOpenContact(true)

		let path = "";
		let url = "";

		const { fileId, name } = contact.contactPhoto

		if (fileId) {
			path = `/contacts/${ user }/${ id }/contactPhoto/${ fileId }/${ name }`
			url = placeholder;
		}
		
		if ( !fileId ) {
			path = ``
			url = noFoto
		}

		setContactPhotoStore( { fileId, name, path, url } )

	}
	, [ contacts, contactId, contactState, contactName, contactData, contactPhoto  ] )


	const createContact = useCallback(
		() => {
			console.log( "click at create contact")

			if ( contactState.openContact ) {
				clickAtCloseButton()
			}
		
			const id = Date.now();
			const contact = {
				contactId: id,
				contactData: {
					phone: "",
					email: "",
					gitHub: "",
					telegram: "",
				},
				contactName: {
					name: "",
					surName: "",
					secondName: "",
				},
				contactPhoto: {
					fileId: "",
					name: "",
				}
			}

			setFieldAtDatabase(`/contacts/${ user }`, id, contact )
			
			setContactId(contact.contactId)
			setNameData( contact.contactName )
			setContactData(contact.contactData)
			setOpenContact( true ) 
		}

	, [ contacts, contactId, contactState, contactName, contactData, contactPhoto ] )


		return {
			clickAtTitle,
			createContact
		}

	}