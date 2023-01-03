import { memo } from "react";
import { RemoveButton } from "../buttons/RemoveButton";
import { CloseButton } from "../buttons/CloseButton";

import "./button-container.scss"

/**
 * Мемоизированый компонент контейнер, создает блок с классом "task-field__button-container" для размещения кнопок закрытия и удаления.
 * 
 * мемоизация работает при загрузке файлов, в остальном нет
 * 
 * Отрисовывает компоненты кнопок CloseItemButton, RemoveItemButton.
 *  
 * Родительский компонент TaskItemField.
 * 
 * @param { number | string } nextProp.id индификатор задачи (обекта из массива taskState), использутся для передачи в дочерние компоненты для их обработчиков,
 * @param { function } nextProp.clickAtRemoveButton обработчик удаления задачи для компонента RemoveItemButton,
 * @param {function} nextProp.clickAtCloseButton обработчик закрытия поля описания задачи для компонента CloseItemButton
 * @returns 
 */
export const FieldButtonContainer =	memo(
	( { id, clickAtRemoveButton, clickAtCloseButton } ) => {

		// console.log( "button field render...", "  id: ", id)

		return (
			<div className = { `field-container__button-container button-container` }>
				<RemoveButton
					id = { id }
					clickAtRemoveButton = { clickAtRemoveButton }
				/>

				<CloseButton
					id = { id }
					clickAtCloseButton = { clickAtCloseButton }
				/>
			</div>
		)
	}	
)