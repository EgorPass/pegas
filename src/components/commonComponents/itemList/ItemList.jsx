import { LoaderForList } from "../loaderForList/LoaderForList"
import { CreateButton } from "../buttons/CreateButton"

import "./itemList.scss"


/**
 * 
 * 
 * Не мемоизируем, зависит от метода create, 
 * который в свою очередь сильно зависит от
 * cсотояния fieldContent
 * 
 * @param {*} param0 
 * @returns 
 */
export const ItemList = ( { classBlockName, loader, loaderContent, children, create }) => (
		<div className={`list-body__list-container list-container`}>
			
			<div className={`list-container__list-field`}>
					
				<CreateButton create = { create } />

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
