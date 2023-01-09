
import { Checkbox } from "../checkbox/Checkbox";
import { Title } from "../title/Title";
import { FileAnchor } from "../fileAnchor/FileAnchor";

export const TaskItemTitle = ( {
	task,
	setModeForTitle, clickAtCheckboxTitle, clickAtTitle
}) => {


	return (
		<li	className="task-container__task-item task-item" >
			<Checkbox
				id = { task.id }
				isComplite = { task.isComplite }
				className = "task-item__checkbox"
				clickAtCheckbox = { clickAtCheckboxTitle }
				/>
			<Title
				id ={ task.id }
				title = { task.title ? task.title : task.description.slice(0, 20) + "..."}
				clickAtTitle = { clickAtTitle }
				className=  {`task-item__title task-item__title_${ setModeForTitle ( task.deadline, task.isComplite ) }`}
				styled={{ fontStyle: (task.title ? "normal" : "italic") } }
			/>

			{
				task.files &&
				<FileAnchor />
			}
		</li>
	)
}