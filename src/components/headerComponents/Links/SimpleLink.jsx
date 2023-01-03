import { memo } from "react"
import { NavLink } from "react-router-dom";

export const SimpleLink =	memo(	( { children, to, className } ) => {
	
	const setActive = ({ isActive }) => isActive ? (className + " " + className + "_active") : className;
	 
	return (
		<NavLink
			to = { to }
			className = { setActive }
		>
			{ children }
		</NavLink>
			)

		}
	)