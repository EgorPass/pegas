import { memo } from "react"
import { SimpleLink } from "../Links/SimpleLink"
import { LogoutLink } from "../Links/LogoutLink"

export const HeaderLogLinkBox = memo(({ isAuth }) => {
	
	// console.log("HeaderLogLinkBox render... ")

	return (
		<li className="body-header__nav-list-item">
			{
				isAuth ? (
					<LogoutLink />
				) : (
					<SimpleLink
						to="login"
						className="body-header__nav-link"
					> Log In </SimpleLink>
				)
			}
		</li>
	)
}
)