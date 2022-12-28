import { memo } from "react"

import './contacts-container.scss'

export const ContactsItemList = memo( ({ contacts, clickAtTitle }) => {
	
	console.log("ContactsItemList render ...")

	return (
				<>
				{
					contacts.map( it => {
						return (
							<li
								key = { it.contactName.id }
								className = "contacts-container__contact-item contact-item" 
							>

								<span
									className = "contact-item__contact-name"
									onClick = { ( e ) => {clickAtTitle( it.contactName.id ) } }
								>
									{ it.contactName.surName } 
									{ it.contactName.surName &&
										<span>
											&nbsp;
										</span>
									}
									{ it.contactName.name } 
								</span>
							</li>
						)
					})
				}
			</>
	)
} )