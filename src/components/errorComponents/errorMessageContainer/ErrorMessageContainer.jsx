export const ErrorMessageContainer = ({ children }) => (

	<div className="error-page__message-container">		
		<div className="error-page__message">
			<p className="error-page__notefication">
				Что то пошло не так...
			</p>
			<p className="error-page__notefication">
				{	children }
			</p>
		</div>	
	</div>
)