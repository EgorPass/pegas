

export const LoginButton = ({title, onclick}) => {

	// console.log( "LoginButton render... ")

	return (
		<button
			className = "login-body__button"
			onClick={onclick}
			type = "submit"
		>
			{ title }
		</button>
	)
}