import { memo } from "react"

export const RemoveFile = memo( ({ className, onclick, id, fileId, name = "" }) => {

	// console.log( "RemoveFile render... ", fileId)


	return (
		<div
			className = { className }
			onClick = { () => { onclick( id, fileId, name ) } }
		>
			x
		</div>
	)
})