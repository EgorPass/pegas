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
				
					const { name, surName, secondName } = it.contactName;
					const { phone, telegram, email, gitHub, other } = it.contactData;
					
					return (
						<li
							key = { it.contactId }
							className = "contacts-container__contact-item contact-item" 
							>

							<span
								className="contact-item__contact-name"
								onClick = { ( e ) => { clickAtTitle( it.contactId ) } }
							>
								{
									( name ||  secondName ||  surName) ? (
										<>
											<span> { surName } </span>
											<span> { name } </span>
											<span> { secondName } </span>
										</>
									) : ( 
										phone || telegram || email || gitHub || other
									) ? (
										phone || telegram || email || gitHub || other
									) : "..."
								}
							</span>
						</li>
					)
				})
			}
		</>
)
)