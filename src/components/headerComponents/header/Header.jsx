import { memo } from "react"

import { useLocation } from "react-router-dom"

import { useHeader } from "../../../hooks/componentsHooks/headerHooks/useHeader"
import { useGetStore } from "../../../hooks/reduxHooks/useGetStore"

import { HeaderList } from "../headerList/HeaderList"
import { HeaderLogLinkBox } from "../headerLogLinkBox/HeaderLogLinkBox"
import { SearchField } from "../search/SearchField"

import "./header.scss"

export const Header = memo(() => {

	const { search } = useGetStore();
	const { changeSearch } = useHeader();
	const { pathname } = useLocation();

	const stateSearch = pathname === "/tasks" || pathname === "/contacts"
	// console.log("Heder render...")
	
	return (
		<header className = "pegas-body__body-header body-header">
			<div className = "body-header__container">

				<h1 className = "body-header__head"> &lt; Pegas &gt; </h1>
				
				{/* <div className="body-header__menu">M</div> */}
				
				<nav className="body-header__nav">
					
					
					<HeaderList>
						<HeaderLogLinkBox />
					</HeaderList>

				</nav>

				{
					stateSearch &&
					<SearchField
					content = { search }
					changeSearch = { changeSearch }
					/>
				}
			
			</div>
		</header>
	)
} )