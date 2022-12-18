import { SimpleLink } from "../Links/SimpleLink"
import { LogoutLink } from "../Links/LogoutLink"
import { useGetStore } from "../../../hooks/reduxHooks/useGetStore";


export const HeaderLogLinkBox = () => {
	
	// console.log("HeaderLogLinkBox render ...")

	const { isAuth } = useGetStore("auth")

	return (
		<>
			{
				isAuth ? 
					<li className="body-header__nav-list-item">
						<LogoutLink /> 
					</li>
					:
						<li className="body-header__nav-list-item">
						<SimpleLink className =  "body-header__nav-link"  to = "login"> Log In </SimpleLink>
					</li>
			}
		</>
	)
}