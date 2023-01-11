import { Outlet } from "react-router-dom"

import { Header } from "../headerComponents/header/Header"
import { Footer } from "../footer/Footer"

import "./listBody.scss"

export const Layout = () => {
	// console.log(" Layout render....")
	
	return (
		<div
			className="pegas-body"
			onDragStart={(e) => { e.preventDefault() } } 
		>
			<Header />

			<main className = "pegas-body__main">
					<Outlet />
			</main>

			<Footer />

		
		</div>

	) 
}