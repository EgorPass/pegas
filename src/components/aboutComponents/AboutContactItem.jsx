import { Anchor } from "../commonComponents/anchor/Anchor"

export const AboutContactItem = ( { href, children,  anchTitle } ) => {
	
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