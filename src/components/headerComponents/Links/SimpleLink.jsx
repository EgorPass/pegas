import { NavLink } from "react-router-dom";
import { useHeader } from "../../../hooks/componentsHooks/headerHooks/useHeader";

export const SimpleLink =	( { children, to, className } ) => {
	
	const { clickAtLink } = useHeader()

	const setActive = ({ isActive }) => isActive ? (className + " " + className + "_active") : className;
	 
	return (
		<NavLink
			to = { to }
			className = { setActive }
			onClick = { clickAtLink }
		>
			{ children }
		</NavLink>
			)

}
