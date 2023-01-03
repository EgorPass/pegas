import { Link } from "react-router-dom"

export const ErrorLinkDescription = ({ description, linkTitle, to }) => (
	
	<div className="error-page__link-description">
		<span className="error-page__link-notefication">
			{ description }
		</span>
		<Link
			to = {to}
			className = "error-page__link"
		>
			{ linkTitle }
		</Link>
</div>

)