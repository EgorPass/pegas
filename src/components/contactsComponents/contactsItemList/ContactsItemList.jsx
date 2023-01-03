import { memo } from "react"

import './contacts-container.scss'

export const ContactsItemList = memo(
	( {	
		contacts,
		clickAtTitle
	} ) => (
		<>
			{
			contacts && contacts.map(it => {
					return (
						<li
							key = { it.contactId }
							className = "contacts-container__contact-item contact-item" 
						>

							<span
								className = "contact-item__contact-name"
								onClick = { ( e ) => {clickAtTitle( it.contactId ) } }
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
)