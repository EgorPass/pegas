import { useMemo, useCallback } from "react"
import { useGetStore } from "../../reduxHooks/useGetStore";
import { useContactNameActions, useContactDataActions, useContactStateActions,  } from "../../reduxHooks/useBindActions";
import { useContactsItemField } from "./useContactsItemField";

export function useContactsItemList(  ) {

	const { contactState, contactName, contactData, contacts } = useGetStore( "contacts" )
	const { setNameData } = useContactNameActions();
	const { setContactData } = useContactDataActions();
	const { setOpenContact } = useContactStateActions();
	const { clickAtCloseButton } = useContactsItemField()


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


	
		return {
			clickAtTitle,
			
		}

	}