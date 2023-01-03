import { useCallback } from "react"
import { useGetStore } from "../../reduxHooks/useGetStore";
import { useContactsActions } from "../../reduxHooks/useBindActions";

import { useFirebase } from "../firebaseHooks/useFirebase";

import { useContactsItemField } from "./useContactsItemField";

export function useContactsItemList(  ) {

	const { setFieldAtDatabase , getImageUrl } = useFirebase();
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
					setContactPhotoPath, resetContactPhoto, setContactPhotoStatus, setContactPhotoUrl
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
		setContactPhotoUrl('')

		let photo = contact.contactPhoto;
		let path = ""

		if (photo.fileId) {
			path = `/contacts/${user}/${id}/contactPhoto/${photo.fileId}/${photo.name}`
		}
		
		if ( !photo.fileId ) {
			path = ""
		}

		setContactPhotoStatus("pending")
		
		getImageUrl(path)
			.then(url => {				
				setContactPhotoUrl( { status: "fulfilled", url } )
			} )
			.catch( err => {
				setContactPhotoUrl( { status: "rejected", url: "" } )
			} )

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

			setContactId(id)
			resetContactPhoto();
			// setFieldAtDatabase(`/contacts/${ user }/${ id }`, "contactName", { ...contactName, id })
			setFieldAtDatabase(`/contacts/${ user }`, id, contact )
			
			setOpenContact( true ) 
		}

	, [ contacts, contactState.openContact, contactName, contactData ] )


		return {
			clickAtTitle,
			createContact
		}

	}