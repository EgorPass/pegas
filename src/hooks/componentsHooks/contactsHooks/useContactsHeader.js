import { useCallback } from "react"

import { useGetStore } from "../../reduxHooks/useGetStore";
import { useFirebase } from "../firebaseHooks/useFirebase";

import { useContactDataActions, useContactNameActions, useContactStateActions } from "../../reduxHooks/useBindActions"

export function useContactsHeader() {

	const { user } = useGetStore("auth")
	const { contactName, contactData } = useGetStore("contacts")
	const { setId } = useContactNameActions();
	const { setContactData } = useContactDataActions();
	const { setOpenContact } = useContactStateActions();

	const { setFieldAtDatabase, getFilesFromDatabase } = useFirebase();


	const createContact = useCallback(
		() => {
			console.log( "click at create contact")

			const id = Date.now();

			setId(id)
			
			setFieldAtDatabase(`/contacts/${ user }/${ id }`, "contactName", { ...contactName, id })
			
			setOpenContact( true ) 
			
		}

	, [ ] )

	return {
		createContact
	}
}