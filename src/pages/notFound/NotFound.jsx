import {  useLocation  } from "react-router-dom"

import { ErrorMessageContainer } from "../../components/errorComponents/errorMessageContainer/ErrorMessageContainer";

const NotFound = () => {

	const { state, pathname } = useLocation()

	return (
		<div className="pegas-body__error-page error-page">
			<p className="error-page__notefication">
				Что то пошло не так...
			</p>
			<p>
				с этой страницей.;

			</p>
			<ErrorMessageContainer >
				{
						state && state?.errorName &&
						/(too-many-requests)/gi.test(state.errorName) &&	
						state?.errorMessage && state?.errorMessage
					}
			</ErrorMessageContainer>
	
		</div>
	)
}

export default NotFound