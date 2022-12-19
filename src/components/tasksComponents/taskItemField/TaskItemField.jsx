import { useMemo, memo } from "react";

import { FieldTitleContainer } from "../fieldTitleContainter/FieldTitleContainter";
import { FieldDescriptionContainer } from "../fieldDescriptionContainer/FieldDescriptionContainer";
import { FieldFileContainer } from "../fieldFileContainer/FieldFileContainer";
import { FieldCheckboxContainer } from "../fieldCheckboxContainer/FieldCheckboxContainer";
import { FieldDeadlineContainer } from "../fieldDeadlineContainer/FieldDeadlineContainer";
import { FieldButtonContainer } from "../fieldButtonContainer/FieldButtonContainer";

import './task-field.scss';

/**
 * Компонент создает блок контейнер в виде модального окна с перекритием содержимого на экране прозрачным блоком и формирует поля описания задания из дочерних компонентов.
 * 
 * Через контекст useTaskItemFieldContext принимает: clickAtCheckboxField clickAtCloseButton,	clickAtRemoveButton, changeTitle, changeDescription, changeDate для работы с датой и текстовыми полями описания задачи
 * 
 * Через контекст useFileContext принимает clickAtAddFile, clickAtFile, clickAtCancelLoad, clickAtRemoveFile для работы с разделом прикрепленных файлов
 * 
 * Через конекст useEditContext принимает setModeForTitle, который обрабатывает deaeline и isComplite для установки модификатора стиля заголовка
 * 
 * Состяния textField, fieldState, fieldFiles используются для построения поля описания задачи.
 * 
 * uploadFile - для отслеживания уровня загрузки для прикрепленных файлов, передается в FileContent и далее в FileLoader для передачи уровня отгрузки файла.
 * 
 * Родительский компонент TaskBody.
 * 
 * @returns 
 */
export const TaskItemField =
	memo(
		(
			{
					
					
					fieldContent,						fieldState,
					fieldFiles,							uploadFile,
					
					clickAtCheckboxField,	clickAtCloseButton,
					clickAtRemoveButton,	changeTitle,
					changeDescription,		changeDate,
								
					clickAtFile,					clickAtAddFile,
					clickAtRemoveFile,		clickAtCancelLoad,

					setModeForTitle,			uploadTaskRef,
																									}) => {
	
	console.log("taskItemField render ......",)

	const classNameForFieldTitle =
		useMemo( () => (
			`title-container__title title-container__title_${setModeForTitle(
																												fieldContent.deadline,
																												fieldContent.isComplite
																											)}` )
		, [fieldContent.isComplite, fieldContent.deadline])
		
	console.log("uploadTaskRef from TaskField: ", uploadTaskRef)

			console.log(".....////  :  ", fieldContent.isComplite)
			
	return (
		<div className = "task-body__task-cover" >
			<div className = "task-body__task-field task-field" >
				
				<FieldTitleContainer
					className = { classNameForFieldTitle }
					content = { fieldContent.title }
					onchange = { changeTitle }
				/>
				
				<FieldDescriptionContainer
					content = { fieldContent.description }
					onchange = { changeDescription }
				/>
				
				<FieldFileContainer
					id = { fieldContent.id }
					files = { fieldFiles }
					upload = { uploadFile[fieldContent.id] }
					clickAtAddFile = { clickAtAddFile }
					clickAtFile = { clickAtFile }
					clickAtCancelLoad = { clickAtCancelLoad }
					clickAtRemoveFile = { clickAtRemoveFile }
				/>
				
				<FieldCheckboxContainer
					id={fieldContent.id}
					newField = { fieldState.newField }
					isComplite = { fieldContent.isComplite }
					clickAtCheckbox = { clickAtCheckboxField }
				/>
				
				<FieldDeadlineContainer
					content = { fieldContent.deadline }
					isComplite = { fieldContent.isComplite }
					onchange = { changeDate }
				/>
					
				<FieldButtonContainer
					id = { fieldContent.id }
					clickAtCloseButton = { clickAtCloseButton }
					clickAtRemoveButton = { clickAtRemoveButton }
				/>
						
			</div>		
		</div>
	)
	} 
)
