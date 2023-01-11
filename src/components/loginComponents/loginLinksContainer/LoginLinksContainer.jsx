import { memo } from "react"
import { Link } from "react-router-dom"

export const LoginLinksContainer = memo( ( { regin, onclick } ) => {
	
	console.log("loginLinksContainer render...")
	
		return (
			<>				
				{
					regin ?
						(
							<>
								<Link
									to="/login"
									className="login-body__link"
									onClick={onclick}
								>
									Войти
								</Link>
							</>
						)
						:
						(
							<Link
								to="/regin"
								className="login-body__link"
								onClick={onclick}
							>
								Регистрация
							</Link>
						)

				}
			</>
		)
	}
)