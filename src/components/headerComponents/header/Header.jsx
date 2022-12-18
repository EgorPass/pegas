import { memo } from "react"

import { HeaderList } from "../headerList/HeaderList"
import { HeaderLogLinkBox } from "../headerLogLinkBox/HeaderLogLinkBox"


import "./header.scss"

export const Header = memo(() => {

	// console.log("Heder render...")
	
	return (
		<header className = "pegas-body__body-header body-header">
			
			<h1 className = "body-header__head"> &lt; Pegas &gt; </h1>
			
			<nav className = "body-header__nav">
				
				<HeaderList>
					<HeaderLogLinkBox />
				</HeaderList>

			</nav>
		
		</header>
	)
} )