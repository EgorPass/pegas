import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import { Header } from "../headerComponents/header/Header"
import { Footer } from "../footer/Footer"
import { PageLoaer } from "../commonComponents/pageLoader/PageLoader"

import "./listBody.scss"

export const Layout = () => {
	// console.log(" Layout render....")
	
	return (
		<div className = "pegas-body">
			<Header />

			<main className = "pegas-body__main">
				<Suspense fallback = { <PageLoaer /> } > 
					<Outlet />
				</Suspense>
			</main>

			<Footer />

		
		</div>

	) 
}