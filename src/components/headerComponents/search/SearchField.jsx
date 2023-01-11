import { memo } from "react";

export const SearchField = memo(({ changeSearch, content }) => {
	
	console.log( "SearchField render... ")
	
	return (
		<div className="body-header__search-field">
			<span>
			</span>
			<input
				autoComplete="off"
				placeholder="Поиск"
				type="search"
				onChange={changeSearch}
				value={content}
				autoFocus={false}
			/>
		</div>

	)
}
)