import { memo } from "react"

import { useGetStore } from "../../hooks/reduxHooks/useGetStore"

import { ContactsItemField } from "../../components/contactsComponents/contactsItemField/ContactsItemField"
import { ContactsListContainer } from "../../components/contactsComponents/contactsListContainer.jsx/ContactsListContainer"

const Contacts = memo( () => {

	// console.log( "contacts body render... ")

	const { contactState } = useGetStore("contacts")	

	return (
		<div className = "pegas-body__list-body list-body">

			<ContactsListContainer />

			<div className="list-body__back-field"></div>
			{
				contactState.openContact && 
				<ContactsItemField />
			}

		</div>
	)
})

export default Contacts