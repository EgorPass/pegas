export const Anchor = ( { href, children, className = "pegas-body__contact-anchor" } ) => {
	// console.log( "Anchor render>>>: ", children)
	return (

		<a
			href = { href }
			className = { className }
			// className = "pegas-body__contact-anchor"
			target = "_blanc"
		>
			{ children }
		</a>
		)
} 