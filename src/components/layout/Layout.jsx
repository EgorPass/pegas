import { Outlet } from "react-router-dom"

import { Header } from "../headerComponents/header/Header"
import { Footer } from "../footer/Footer"

import "./layout.scss"


export const Layout = () => {
	// console.log(" Layout render....")
	
	return (
		<div className = "pegas-body">
			<Header />

			<main>

				<Outlet />
			
			</main>

			<Footer />

		
		</div>

	) 
}