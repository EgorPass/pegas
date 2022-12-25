import { memo } from "react"
// import { SearchField } from "../searchField/SearchField";
// import { CreateButton } from "../buttons/CreateButton";

// import './task-header.scss';


/**
 * Мемоизированный компонент отрисовывает Header списка задач.
 * В компоненте содержиться поисковая строка и кнопка создания новой задачи.
 * 
 * Рисует компоненты SearchField и мемоизированный CreateButton.
 * 
 * @param {string} nextProp.search строка из состояния search для контролируемого компонента
 * и changeSearch обрабатывает запрос поисковой строки.
 * search состояние из redux
 * 
 * @returns 
 */
export const ContactsHeader = memo(
	( {  search, changeSearch, createContact} ) => {

		// console.log( "taskHeader render.... ")
				
		return (
			<div className = "cotacts-body__contacts-header contacts-header">
				<div className = "contats-header__create-container">
					<div
						onClick = { createContact }
						className = "contacts-header__create-button"
						data-task-tooltip = "Создать новую задачу"
					>
						+
					</div>
				</div>		
				


				{/* <SearchField
					changeSearch = { changeSearch }
					content = { search }
				/> */}
{/* 
				<CreateButton
					createTask = { createTask }
				/> */}

			</div>
		)
	}
)

