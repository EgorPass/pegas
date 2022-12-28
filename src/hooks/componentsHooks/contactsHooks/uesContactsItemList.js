import { useCallback } from "react"
import { useGetStore } from "../../reduxHooks/useGetStore";
import { useContactNameActions, useContactDataActions, useContactStateActions,  } from "../../reduxHooks/useBindActions";

import { useFirebase } from "../firebaseHooks/useFirebase";


import { useContactsItemField } from "./useContactsItemField";

export function useContactsItemList(  ) {

	const { user } = useGetStore("auth")
	const { contactState, contactName, contactData, contacts } = useGetStore( "contacts" )
	const { setNameData, setId } = useContactNameActions();
	const { setContactData } = useContactDataActions();
	const { setOpenContact } = useContactStateActions();
	const { clickAtCloseButton } = useContactsItemField()
	const { setFieldAtDatabase } = useFirebase();


	const clickAtTitle = useCallback( (id) => {
		
		if (contactState.openContact) { 
			clickAtCloseButton()
		}
		
		const contact = contacts.find(it => it.contactName.id === id)		
		if (!contact) return;
		
			setNameData( contact.contactName )
			setContactData(contact.contactData)
			setOpenContact( true )
		
		}
	, [ contacts, contactState.openContact, contactName, contactData ] )


	const createContact = useCallback(
		() => {
			console.log( "click at create contact")

			if ( contactState.openContact ) {
				clickAtCloseButton()
			}
		
			const id = Date.now();
			const contact = { 
				contactData: {
					phone: "",
					email: "",
					gitHub: "",
					telegram: "",
				},
				contactName: {
					id,
					name: "",
					surName: "",
					secondName: "",
				}
			}

			setId(id)
			
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