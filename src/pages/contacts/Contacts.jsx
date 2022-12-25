import { useMemo, memo, useEffect } from "react"

import { useGetStore } from "../../hooks/reduxHooks/useGetStore"
import { useContactsActions } from "../../hooks/reduxHooks/useBindActions"

import { useFirebase } from "../../hooks/componentsHooks/firebaseHooks/useFirebase"

import { ItemList } from "../../components/commonComponents/itemList/ItemList"
import { useContactsHeader } from "../../hooks/componentsHooks/contactsHooks/useContactsHeader"
import { useContactsItemList } from "../../hooks/componentsHooks/contactsHooks/uesContactsItemList"
import { useContactsItemField } from "../../hooks/componentsHooks/contactsHooks/useContactsItemField"

import { ContactsItemList } from "../../components/contactsComponents/contactsItemList/ContactsItemList"
import { ContactsItemField } from "../../components/contactsComponents/contactsItemField/ContactsItemField"



export const Contacts = () => {

	// console.log( "contacts body render... ")

	const { loaderItem } = useGetStore()
	const { user } = useGetStore("auth")
	const { contactName, contactData, contactState, contacts } = useGetStore("contacts")
	const { getContacts } = useContactsActions();
	const {
		changeName, changeSurName, changeSecondName,
		changePhone, changeTelegram, changeEmail,
		changeGitHub, changeOther,
		
		clickAtCloseButton, clickAtRemoveButton,
	} = useContactsItemField();
	const { createContact } = useContactsHeader()
	const { clickAtTitle } = useContactsItemList(contacts);
	const { monitor } = useFirebase();

	const dataOfName = useMemo(() => [
				{
					title: "Имя",
					content: contactName.name || "",
					onchange: changeName
				},
				{
					title: "Фамилия",
					content: contactName.surName  || "",
					onchange: changeSurName
				},
				{

					title: "Отчество",
					content: contactName.secondName  || "",
					onchange: changeSecondName
				}
			]
	, [ contactName ] )

	const dataOfContacts = useMemo(() => [
				{
					type: "phone",
					title: "Телефон",
					content: contactData.phone  || "",
					onchange: changePhone
				},
				{
					type: "text",
					title: "Телеграм",
					content: contactData.telegram  || "",
					onchange: changeTelegram
				},
				{
					type: "email",
					title: "Email",
					content: contactData.email  || "",
					onchange: changeEmail
				},
				{
					type: "text",
					title: "GitHub",
					content: contactData.gitHub  || "",
					onchange: changeGitHub 
				},
				{
					type: "text",
					title: "друге",
					content: contactData.other  || "",
					onchange: changeOther
				}
	]
	, [ contactData ] )
	


	useEffect(() => {
		monitor( `/contacts/${ user }`, getContacts )		
		
	}, [  ] )

	return (
		<div className = "pegas-body__list-body list-body">

			<ItemList 
				classBlockName = "contacts"
				loader = { loaderItem }
				laoderContent = "Давайте создадим контакт"
				create = { createContact }
			>		
			
				<ContactsItemList 
					contacts = { contacts }
					clickAtTitle = { clickAtTitle }
				/>
			</ItemList>
			

			{
				contactState.openContact && 
				<ContactsItemField
					id = { contactName.id }
					dataOfName={dataOfName}
					dataOfContacts = { dataOfContacts }
					clickAtCloseButton = { clickAtCloseButton }
					clickAtRemoveButton = { clickAtRemoveButton }
				/>
			}


		</div>


	)
}