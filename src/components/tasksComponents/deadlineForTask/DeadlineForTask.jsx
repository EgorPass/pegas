
export const DeadlineForTask = ({ content, onchange }) => {

	console.log( "DeadLineForTask render... ")

	
	return (
		<input
			type="date"
			name="date"
			value={content}
			className="deadline-container__deadline"
			onChange={onchange}
		/>
	)
}
