import { createContext, useContext } from "react"

import { useRefference } from "../componentsHooks/ref/useRefference.js"

import { useLogin } from "../componentsHooks/loginHooks/useLogin"; 

// import { useTaskHeader } from "../componentsHooks/tasksHooks/useTaskHeader";
import { useTaskItemList } from "../componentsHooks/tasksHooks/useTaskItemList";
import { useTaskItemField } from "../componentsHooks/tasksHooks/useTaskItemField"
import { useEdit } from "../componentsHooks/tasksHooks/useEdit"



//////////////////////////////////////////////////
/////////// работа с авторизацией ////////////////

const ContextForLogin = createContext();


export const LoginContext = ({ children }) => {
	const loginMethods = useLogin()


	return (

		<ContextForLogin.Provider value={ loginMethods }>
			{ children }
		</ContextForLogin.Provider>
	)
}
export const useLoginContext = () => useContext(ContextForLogin);

//////////////////////////////////////////////////
//////////////////////////////////////////////////


//////////////////////////////////////////////////
////////// работа с задчником ////////////////////

// const ContextForTaskHeader = createContext( null )
const ContextForTaskItemList = createContext( null )
const ContextForTaskItemField = createContext( null )
const ContextForEdit = createContext( null )


// export const TaskHeaderContext = ( { value, children } ) => {
	
// 	const headerMethods = useTaskHeader()
	
// 	return (
// 		<ContextForTaskHeader.Provider value = { headerMethods } >
// 			{ children }
// 		</ContextForTaskHeader.Provider>
// 	)
// }
// export const useTaskHeaderContext = () => useContext( ContextForTaskHeader )


export const TaskItemListContext = ( { value, children } ) => {
	
	const taskItemListMethods = useTaskItemList();

	return (
		<ContextForTaskItemList.Provider value = { taskItemListMethods } >
			{ children }
		</ContextForTaskItemList.Provider>
	)
}
export const useTaskItemListContext = () => useContext( ContextForTaskItemList )


export const TaskItemFieldContext = ( { value, children } ) => {
	
	let { uploadTaskRef } = useRefference();
	const taskItemFieldMethods = useTaskItemField( uploadTaskRef );

		// console.log("uploadTaskRef from TaskFieldContext: ", uploadTaskRef)

	return (
		<ContextForTaskItemField.Provider value={{ ...taskItemFieldMethods, uploadTaskRef } } >
			{ children }
		</ContextForTaskItemField.Provider>
	)
}
export const useTaskItemFieldContext = () => useContext( ContextForTaskItemField )


export const EditContext = ( { value, children } ) => {
	
	const editMethods = useEdit()

	return (
		<ContextForEdit.Provider value = { editMethods } >
			{ children }
		</ContextForEdit.Provider>
	)	
}
export const useEditContext = () => useContext(ContextForEdit)









