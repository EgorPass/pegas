import { createContext, useContext } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLogin } from "../componentsHooks/loginHooks/useLogin"; 


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
















