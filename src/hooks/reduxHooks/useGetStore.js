import { useSelector } from "react-redux"

export const useGetStore = ( field ) => {
	const store = useSelector( store => store )
		
	// console.log(store)
	
	if ( field in store ) return store[ field ]
	
	return store;
}