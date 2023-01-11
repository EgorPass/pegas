import { useEffect } from "react"

import { useGetStore } from "../../../hooks/reduxHooks/useGetStore"

import { useFirebase } from "../../../hooks/componentsHooks/firebaseHooks/useFirebase"

import { ItemList } from "../../../components/commonComponents/itemList/ItemList"

import { useContactsItemList } from "../../../hooks/componentsHooks/contactsHooks/uesContactsItemList"
import { ContactsItemList } from "../contactsItemList/ContactsItemList"
import { useContactsActions } from "../../../hooks/reduxHooks/useBindActions"


export const ContactsListContainer = () => {
	
	const { user } = useGetStore("auth")
	const { loaderItem } = useGetStore()
	const { contacts } = useGetStore("contacts")
	const { getContacts } = useContactsActions();
	
	const { monitor } = useFirebase();
	const { createContact, clickAtTitle } = useContactsItemList();
	
	useEffect(() => {
		monitor( `/contacts/${ user }`, getContacts )		
	}, [  ] )

	console.log( "ContactsListContainer render... ")
	

	return (
		<ItemList 
			classBlockName = "contacts"
			loader = { loaderItem }
			loaderContent = "Давайте создадим контакт"
			create = { createContact }
			
		>		
			<ContactsItemList
				contacts = { contacts }
				clickAtTitle = { clickAtTitle }
			/>
		</ItemList>

	)
}