import { memo } from "react";
/**
 * компонент рисует в TaskHeader поле поиска задачи
 * 
 * Поиск по частичному совпадению в названии задачи или описании.
 * 
 * Работает на управляемом элементе input который обрабатывает ввод за счет функции changeSearch и сотояния search, которое передается в пропсу content.
 * 
 * @param {object} param0
 * @param {function} param0.changeSearch 
 * @param {string} param0.content 
 * 
 * @param changeSearch  обработчик для изменения поисковой строки и одновременно делает поиск по совпадениям
 * @param content состояния для передачи в value элемента  input
 * @returns 
 */
export const SearchField = memo( ( { changeSearch, content }  ) => (
		<div className="body-header__search-field">
			<span>				
			</span>
			<input
				autoComplete="off"
				placeholder="Поиск"
				type = "search"
				onChange = { changeSearch }
				value = { content }
				autoFocus = { false }
			/>
		</div>

	)
)