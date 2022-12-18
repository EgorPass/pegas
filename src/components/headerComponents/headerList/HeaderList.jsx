import { SimpleLink } from "../Links/SimpleLink";

export const HeaderList = ({children}) => {
	
	// console.log("HeaderList render...")
	
	const classForLink = "body-header__nav-link"
	const classForListItem =  "body-header__nav-list-item"
	const linksList = [
		{
			name: "Home",
			to: "/"
		},
		{
			name: "About",
			to: "about"
		},
		{
			name: "Contacts",
			to: "contacts"
		},
		{
			name: "Tasks",
			to: "tasks"
		},
	]

	return (
		<>
			<ul className = "body-header__nav-lists">

				{
					linksList.map(it => {
						return (
							<li key = {it.to}
								className={classForListItem}>
								<SimpleLink className={classForLink} to={it.to}> { it.name }</SimpleLink>
							</li>
						)
					} )
				}

				{ children }

			</ul>
		</>
	)
}