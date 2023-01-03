import { lazy, } from "react";
import {  Routes, Route } from "react-router-dom"

import { getAuth } from "firebase/auth";

import { LoginContext } from "./hooks/context/useContextData"

import { useAuthActions } from "./hooks/reduxHooks/useBindActions"

import { Layout } from "./components/layout/Layout"
import { RequestAuth } from "./hooks/HOCs/RequestAuth"

const Home = lazy( ()=> import("./pages/home/Home") )
const About = lazy( () => import ( "./pages/about/About" ) )

const Login = lazy( ()=> import("./pages/login/Login") )
const NotFound = lazy( () => import ( "./pages/notFound/NotFound" ) )

const Contacts = lazy(() => import("./pages/contacts/Contacts"))
const Tasks = lazy( () => import ("./pages/tasks/Tasks") )


function App() {
	console.log( "App render... " )
	getAuth();

	const { setIsAuth, setUser } = useAuthActions();
	const user = window.localStorage.getItem( "pegas-user" );
	
		setIsAuth(!!user)
		setUser(user)
 
	return (
		<LoginContext>
			<Routes>
				<Route path="/" element={<Layout />} >
	
						<Route index element = { <Home />	} />
														
						<Route path="tasks" element={
																					<RequestAuth>
																						<Tasks /> 
																					</RequestAuth>
																				} />	
						<Route path = "contacts" element = { 
																						<RequestAuth>
																							<Contacts	/>
																						</RequestAuth> 
																					} />
						<Route path = "about" element = {	<About />	} />

						<Route path = "login" element = { <Login	/> } />
						<Route path = "regin" element = { <Login regin = { true } /> } />
											
						<Route path = "/*" element = { <NotFound /> } />
				</Route>
			</Routes>
		</LoginContext>
  );
}

export default App;
