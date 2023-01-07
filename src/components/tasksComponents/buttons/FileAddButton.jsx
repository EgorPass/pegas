import { memo } from "react";

/**
 * Создает мемоизированный компонент, кнопку добавления файла в раздел загрузки файлов в поле описания задачи.
 * 
 * мемоизируем, что бы не отрисовывалась при загрузке файла.
 * 
 * @param {number | string} nextProp.id индификатор задачи (обекта из массива taskState), использутся в обработчике clickAtAddFile
 * @param {function} nextProp.clickAtAddFile обработчик для создания новой задачи
 * 
 * @returns 
 */
export const FileAddButton = memo( ( { id, clickAtAddFile } ) =>  (
	<div className = "file-container__file-add-position">
		<label>
			<input
				multiple
				onChange={(e) => clickAtAddFile(id, e.target)}
				name = "files"
				type = "file"
				className = 'file-container__file-add-input'
			/>
			<div
				className = "file-container__file-add"
				data-task-tooltip = "Прикрепить файл к задаче"
			>
				+
			</div>
		</label>
	</div>
))