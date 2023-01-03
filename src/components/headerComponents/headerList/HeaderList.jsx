import { memo } from "react"
import { SimpleLink } from "../Links/SimpleLink";
import { HeaderLogLinkBox } from "../headerLogLinkBox/HeaderLogLinkBox";

export const HeaderList =	memo(	( { isAuth } ) => {
		
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
		<nav className="body-header__nav">
		
			<ul className="body-header__nav-lists">

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

				<HeaderLogLinkBox isAuth = { isAuth } />
			
			</ul>
		</nav>
			
	)
})