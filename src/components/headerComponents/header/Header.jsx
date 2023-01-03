import { memo } from "react"

import { useLocation } from "react-router-dom"

import { useHeader } from "../../../hooks/componentsHooks/headerHooks/useHeader"
import { useGetStore } from "../../../hooks/reduxHooks/useGetStore"

import { HeaderTitle } from "../headerTile/HeaderTitle"
import { HeaderList } from "../headerList/HeaderList"
import { SearchField } from "../search/SearchField"

import "./header.scss"

export const Header = () => {

	const { search } = useGetStore();
	const { isAuth } = useGetStore("auth")		
	const { changeSearch } = useHeader();
	const { pathname } = useLocation();

	const stateSearch = pathname === "/tasks" || pathname === "/contacts"
	
	console.log("Heder render...")
	
	return (
		<header className = "pegas-body__body-header body-header">
			<div className = "body-header__container">

				<HeaderTitle />
				
				<HeaderList isAuth = { isAuth }  />

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
} 