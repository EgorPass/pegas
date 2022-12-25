import { useMemo, useCallback } from "react";

import { useFirebase } from "../firebaseHooks/useFirebase";

import { useGetStore } from "../../reduxHooks/useGetStore";
import { useContactDataActions, useContactNameActions, useContactStateActions, } from "../../reduxHooks/useBindActions";
import { contacts } from "../../../redux/contactsStore/contactsSlice";

export function useContactsItemField() {
	
	const { user } = useGetStore("auth")
	const { contactName, contactData, contactState } = useGetStore("contacts")
	const {
					setFieldAtDatabase,			uploadFileToStorage,
					deleteFileFromStorage,	downlaodFileFromStorage
																														} = useFirebase()
	
	const { setOpenContact } = useContactStateActions();
	const { setName, setSurName, setSecondName, resetNameData } = useContactNameActions();
	const { setPhone, setTelegram, setEmail, setGitHub, setOther, resetContactData } = useContactDataActions()


	const changeName = useCallback(({ target: { value } }) => {
		setName(value)
	}
		, [contactName.name])
	
	const changeSurName = useCallback(({ target: { value } }) => {
		setSurName(value)
	}
		, [contactName.surName])

	const changeSecondName = useCallback(({ target: { value } }) => {
		setSecondName(value)
	}
		, [contactName.secondName])


	const changePhone = useCallback(({ target: { value } }) => {
		setPhone(value)
	}
		, [contactData.phone])

	const changeTelegram = useCallback(({ target: { value } }) => {
		setTelegram(value)
	}
		, [contactData.telegram])

	const changeEmail = useCallback(({ target: { value } }) => {
		setEmail(value)
	}
		, [contactData.email])
	
	const changeGitHub = useCallback(({ target: { value } }) => {
		setGitHub(value)
	}
		, [contactData.gitHub])

	const changeOther = useCallback(({ target: { value } }) => {
		setOther(value)
	}
		, [contactData.other])

	
	const clickAtCloseButton = useCallback(
		( id ) => {

			
			setFieldAtDatabase( `/contacts/${ user }/${ contactName.id }`,  "contactName" , contactName )
			setFieldAtDatabase( `/contacts/${ user }/${ contactName.id }`,  "contactData" , contactData )
			
			setOpenContact(false) 
			resetNameData();
			resetContactData();
			
		}
	, [ contactData, contactName, contactState ] )
	

	const clickAtRemoveButton = useCallback(
		( id ) => {

			setOpenContact( false ) 
			resetNameData();
			resetContactData();

		setFieldAtDatabase( `/contacts/${ user }`, contactName.id, null )

			// contacts = contacts.filter( it => id !== contacts.contactName.id )
	}
	, [ contacts, contactName, contactData, contactState ])
	
	return {
		changeName,
		changeSurName,
		changeSecondName,

		changePhone,
		changeTelegram,
		changeEmail,
		changeGitHub,
		changeOther,

		clickAtCloseButton,
		clickAtRemoveButton,
	}
}