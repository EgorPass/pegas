import { useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { getAuth } from "firebase/auth"

import { LoginContext, TaskHeaderContext, TaskItemListContext, TaskItemFieldContext, EditContext } from "./hooks/context/useContextData"

import { useAuthActions } from "./hooks/reduxHooks/useBindActions"

import { Login } from "./pages/login/Login"
import { Home } from "./pages/home/Home"
import { Tasks } from "./pages/tasks/Tasks"
import { Contacts } from "./pages/contacts/Contacts"
import { About } from "./pages/about/About"
import { NotFound } from "./pages/404/404"
import { Layout } from "./components/layout/Layout"
import { RequestAuth } from "./hooks/HOCs/RequestAuth"



function App() {
	console.log( "App render... " )
	
	const auth = getAuth();

	// console.log( auth )

	const { setIsAuth, setUser } = useAuthActions();
	const user = window.localStorage.getItem( "pegas-user" );
	
	// useLayoutEffect(() => {
	setIsAuth(!!user)
	setUser(user)
	// })
 
	return (
		<LoginContext>
			
										<Routes>

										<Route path="/" element={<Layout /> } >
												<Route index element = { <Home /> } />
												<Route path = "tasks" element = { 
																														<RequestAuth>
																															<Tasks /> 
																														</RequestAuth> 
																													} />	
												<Route path = "contacts" element = { 
																														<RequestAuth>
																															<Contacts />
																														</RequestAuth> 
																													} />
												<Route path= "about" element = { <About /> } />
											</Route>

											<Route path = "login" element = { <Login /> } />
											<Route path = "regin" element = { <Login regin = { true } /> } />
											<Route path = "*" element={<NotFound />} />
										
										</Routes>

		</LoginContext>
  );
}

export default App;
