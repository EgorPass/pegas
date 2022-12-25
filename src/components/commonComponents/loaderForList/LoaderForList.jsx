import { memo } from "react"
import { ThreeDots } from "react-loader-spinner"


/**
 * Мемоизированный компонент для отрисовки лоадера ожидания
 * 
 * Или строит фразу о создании первой задачи
 */
export const LoaderForList =
	memo(
	( { state, content, classBlockName } ) => {
		
		// console.log( "   ... LoaderForList state: ", state )
		// console.log("three dots render ....")


		return (
			<div
				style={{ display: (state === "complite" ? "none" : "flex") }}
				className={`list-container__list-loader`}
			>
			
				<div
					style={{ display: (state === 'empty') ? "block" : "none" }}
					className={`list-container__list-loader-empty`}
				>
					{ content }
				</div>
				
					<ThreeDots
							height = "35"
							width = "50" 
							radius = "9"
							color = "#4fa94d"
							// color="gray" 
							
							ariaLabel = "three-dots-loading"
							wrapperStyle = { {} }
							wrapperClassName = ""
							visible = { state === "loading" }
						/>

			</div>
		)
	} 
)