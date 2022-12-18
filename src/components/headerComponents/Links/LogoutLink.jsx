import { Link } from "react-router-dom"
import { useLoginContext } from "../../../hooks/context/useContextData";


export const LogoutLink = () => {

	// console.log("LogoutLink render...")

	const { logoutButton } = useLoginContext()

	return (
		<Link
			to= "/home"
			className = "body-header__nav-link"
			onClick = {logoutButton}
		>
			Log Out
		</Link>

	)
}