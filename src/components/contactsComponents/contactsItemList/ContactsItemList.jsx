

export const ContactsItemList = ({ contacts, loader, clickAtTitle }) => {

	return (
		// <div className="contacts-body__content-container">
			// <ul className = "contacts-body__contacts-container contacts-container">
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
			{/* </ul> */}

			{/* <TaskContainerLoader	
				state = { loader }
				content = { "Давайте создадим контакт" }
			/> */}
		{/* </div> */}
			</>
	)
}