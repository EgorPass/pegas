import { Link } from "react-router-dom"

export const LinksToDescription = () => (
<ul>
	<li>
		<strong>
			Home
		</strong>
		<span>
			&nbsp;- на котором мы сейчас находимся и на котором короткое описания разделов проекта.
		</span>
	</li>

	<li>
		<Link to="About"><strong>About</strong></Link>
		<span>
			&nbsp;- раздел с моими контактами и описанием опыта.
		</span>
	</li>

	<li>
		<Link to="Contacts"><strong>Contacts</strong></Link>
		<span>
			&nbsp;- раздел с интерфейсом для создания справочника контактов. 
		</span>
	</li>
	
	<li>
		<Link to="tasks"><strong>Tasks</strong></Link>
		<span>
			&nbsp;- раздел с интерфейсом для создания списка задач. 
		</span>
	</li>
	<li>
		<Link to="logIn"><strong>Log In</strong></Link>
		<span>
			&nbsp;- страница для авторизации или регистрации.
		</span>
	</li>
</ul>
)