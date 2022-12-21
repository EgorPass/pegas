import { memo } from "react"
import { ThreeDots } from "react-loader-spinner"

/**
 * Мемоизированный компонент для отрисовки лоадера ожидания
 * 
 * Или строит фразу о создании первой задачи
 */
export const TaskContainerLoader =
	memo(
	( { state, content, children } ) => {
		
		// console.log( "   ... TaskContainerLoader's state: ", state )
		// console.log("three dots render ....")


		return (
			<div
				style = { { display: ( state === "complite" ? "none" : "flex" ) } }
				className="task-body__content-container-loader"
			>
			
				<div
					style = { { display: (state === 'empty') ? "block" : "none" } }
					className="task-body__content-container-empty"
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