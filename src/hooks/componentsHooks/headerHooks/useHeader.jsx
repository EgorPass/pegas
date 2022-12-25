import { useCallback } from "react"
import { useLocation } from "react-router-dom";
import { useContactsActions, useTasksActions, useSearchActions } from "../../reduxHooks/useBindActions";

import { useGetStore } from "../../reduxHooks/useGetStore";
import { useFirebase } from "../firebaseHooks/useFirebase"
import { useTaskItemField } from "../tasksHooks/useTaskItemField";
import { useContactsItemField } from "../contactsHooks/useContactsItemField"
import { contactState } from "../../../redux/contactsStore/contactStateSlice";

export function useHeader() {
	
	const { user } = useGetStore("auth")
	const { tasks, fieldState: { openField: tasksOpen}, fieldContent } = useGetStore("tasks")
	const { contacts, contactState: { openContact: contactsOpen}, contactName, contactData } = useGetStore("contacts")
	const state = useGetStore("contacts")
	const { getTasks } = useTasksActions()
	const { getContacts } = useContactsActions()
	const { setSearch } = useSearchActions();

	const { clickAtCloseButton: tasksClose } = useTaskItemField()
	const { clickAtCloseButton: contactsClose } = useContactsItemField();
	
	const { setFieldAtDatabase, getFilesFromDatabase } = useFirebase();
	
	
	const { pathname } = useLocation(); 


	const path = pathname.replace( /\//gi, ''	)

	const searchData = {
		getTasks,
		getContacts,
		tasksClose,
		contactsClose,
		tasksOpen,
		contactsOpen

	}


/**
	 * Вспомогательная функция для обрабтчика ввода в поисковую строку changeSearct
	 * 
	 * ищет в realtimeDatabase по частичному совпадению в словах названия и описания задачи
	 * 
	 * @param {string} value строка для поиска в задачах
	 * @returns {Array} массив с результом поиска, если ни чего возращает полный список задач
	 */

	const searchTask = useCallback(
		async ( value ) => {
			
			if (path === "tasks") {
				const newTasks = await getFilesFromDatabase(`/${path}/${user}/`)
				const tasks = Object.values(newTasks)

				const find = tasks.filter(it => {
					const title = it.title ? it.title.toLowerCase() : "";
					const desc = it.description ? it.description.toLowerCase() : "";
					
					return title.includes(value) || desc.includes(value)
				}) || []
				
				return find.length > 0 ? find : tasks;
			}
			
			if (path === "contacts") {
				const newContacts = await getFilesFromDatabase(`/${path}/${user}/`)
				const contacts = Object.values(newContacts)
				let find = new Set();
				
				for (let  val of contacts) {
					const { contactData, contactName } = val
				
					Object.values( contactData ).forEach(it => {
						if( typeof it === "string" ) {

							let string = it ? it.toLowerCase() : '';							
							if( !!value && string.includes( value ) ) find.add( val )
						}
					})
					
					Object.values( contactName ).forEach(it => {
						if( typeof it === "string" ) {

							let string = it ? it.toLowerCase() : '';							
							if( !!value && string.includes( value ) ) find.add( val )
						}
					})
					
				} 

				return find.size > 0 ? [ ...find ] : contacts
			}
		
		}
	, [ path ] )

	/**
	 * делает input управляемым и создает поиск по совпадению вводимой строки
	 * 
	 * результат выводи через 200ms после первого нажатия клавиши
	 * 
	 * @param {string} value параметр берется из события изменения input
	 */
	const changeSearch = useCallback(
		({ target: { value } }) => {
	
			if ( searchData[ path + "Open" ] ) {
				searchData[ path + "Close" ]();
			}

			setSearch(value)
			
			new Promise( res => {			
				setTimeout( async () => {
					const newTasks = await searchTask( value.toLowerCase() )
					res( newTasks )
				}, 200)

			} )
			.then( res => searchData["get" + path.slice(0,1).toUpperCase() + path.slice(1)]( res ) )
		}
	, [ pathname, contactsOpen,  contactName, contactData, fieldContent] )


	return {
changeSearch

	}

}