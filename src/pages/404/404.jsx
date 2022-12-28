import {  useLocation, useParams  } from "react-router-dom"

import { ErrorMessageContainer } from "../../components/errorComponents/errorMessageContainer/ErrorMessageContainer";
import { ErrorLinkContainer } from "../../components/errorComponents/errorLinkContainer/ErrorLinkContainer";
import { ErrorLinkDescription } from "../../components/errorComponents/errorLinkDeacription/ErrorLinkDescription";

export const NotFound = () => {
	const { state: { errorName, errorMessage } } = useLocation();

	return (
		<main className="pegas-body__error-page error-page">
			<ErrorMessageContainer >
				{
						errorName &&
						/(too-many-requests)/gi.test(errorName) &&	
						errorMessage && errorMessage
					}
			
				{/* 
					Кидаем сюда ошибки по шаблону выше
				*/}
			</ErrorMessageContainer>
	
			<ErrorLinkContainer>
					<ErrorLinkDescription 
						to = "/login"
						linkTitle = "страницы входа в учетную запись." 
						description="Если хотите вернуться назад перейдите по сылке:&nbsp;"
					/>
					<ErrorLinkDescription
						to= "/"
						linkTitle = "домашнюю страницу."
						description = "Сылка на&nbsp;"
					/>		
			</ErrorLinkContainer>
		</main>
	)
}