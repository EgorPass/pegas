import { memo } from "react";

export const InputField = memo(({ title, content, classNameBlock, onchange, classMod = "", type = " text", autocomplite = "off", autofocus = false }) => {

		console.log( ` InputField ${ title } render....`)

	return (
		<div className = { `${ classNameBlock }__field-container` }>
			<label>
				<fieldset
					className={
						`${ classNameBlock }__field 
						${ classNameBlock }__field${classMod}`
				}>
					<legend className = { `${ classNameBlock }__field-description` } >
							{title} 
					</legend>
						
							<input
							value={content}
							onChange={onchange}
							type= {type}
							autoComplete={autocomplite}
							autoFocus = { autofocus }
							className = {
								`${ classNameBlock }__field-input 
								${ classNameBlock }__field-input${ classMod }`}
							/>
						
					</fieldset>
				</label>
			</div>
	)
}

)