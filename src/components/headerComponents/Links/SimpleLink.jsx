import { NavLink } from "react-router-dom";

export const SimpleLink =( { children, to, className } ) => {
	
	const setActive = ({ isActive }) => isActive ? (className + " " + className + "_active") : className;
	 
	// console.log("SimpleLink render...")

	return (
		<NavLink
			to = { to }
			className = { setActive }
		>
			{ children }
		</NavLink>
			)

} 