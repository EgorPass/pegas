import { memo } from "react"
import { LoaderForList } from "../loaderForList/LoaderForList"

import "./itemList.scss"

export const ItemList = memo(( { classBlockName, loader, loaderContent, children, create }) => {
	
		console.log("ItemList render: ", classBlockName)

	return (
		<div className={`list-body__list-container list-container`}>
			
			<div className={`list-container__list-field`}>
					<div
						className={`list-container__create-container`}
						>
						<div
							onClick = { create }
							className={`list-container__create-button`}
							data-task-tooltip = "Создать новую задачу"
							>	+	</div>
					</div>


					<ul className = {`list-container__items-container ${ classBlockName }-container` }>
						
						{children}
					</ul>
			</div>

			<LoaderForList	
				state = { loader }
				content = { loaderContent }
				classBlockName = { classBlockName }
			/>
		</div>

	)
})