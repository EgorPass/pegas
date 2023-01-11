

export const Title = ({ id, title, className, styled, clickAtTitle }) => {

	// console.log("Title render...")
	
	return (
		<span
			className={className}
			style={styled}
			onClick={(e) => {
				clickAtTitle(id)
			}}
			data-task-tooltip={
				`По клику откроется описание задачи: \n${title}`
			}
		>
			{title}
		</span>
	)
}