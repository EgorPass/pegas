
/**
 * Компонент создает элемент заголовка для названия задиня в компоненте TaskItemList.
 * 
 * Обрабатывает клик для открытия описания поля задачи.
 * 
 * Не мемоизируем, зависит от функции clickAtTitle, которая зависит от состояний task, fieldContent, feildFiles, то есть все что меняет описание задач, что бы можно было сохранять это самое поле при клике по другой задаче
 * 
 * 
 * @param {object} param0
 * @param {number | string} param0.id 
 * @param {string} param0.title 
 * @param {function} param0.clickAtTitle
 * @param {string} param0.className 
 * 
 * @param id индификатор задачи (обекта из массива taskState), использутся в обработчике clickAtTitle,
 * @param title название задачи,
 * @param clickAtTitle обработчик для открытия задачи,
 * @param className принимает динамически изменяемое название класса, из родительского компонента (модификатор класса зависит от состояния выоплнения задания, даты завершения задания и текущей даты)
 * @returns 
 */
export const Title = ( { id, title, className, styled, clickAtTitle } ) =>  (
	<span
		className = { className }
		style = { styled }
		onClick = { ( e ) => {
			clickAtTitle( id )
		} }
		data-task-tooltip = {
			`По клику откроется описание задачи: \n${ title }`
		}
	>
		{ title }
	</span>
)