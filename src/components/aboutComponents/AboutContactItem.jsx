import { Anchor } from "../commonComponents/anchor/Anchor"

export const AboutContactItem = ( { href, children,  anchTitle } ) => {
	
	console.log( " AboutContactItem render...")

	return (
		<div className = "about__contacts-item" >
			<span>
				{ children }:
			</span>

			<Anchor
				href = { href }
				>
				{ anchTitle }
			</Anchor>
		</div>

	)
}