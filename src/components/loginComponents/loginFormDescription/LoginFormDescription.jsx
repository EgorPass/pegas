import { memo } from "react";


export const LoginFormDescription = memo( ( { title = "", classMod = "" } ) => {
	
		// console.log( "LoginFormDescription render...")

		return (
			<div
				className = {
					`login-body__form-description login-body__form-description${classMod}`
				}> {title} </div>
		)
	}
)