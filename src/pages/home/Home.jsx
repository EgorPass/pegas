import { Link } from "react-router-dom"

const Home = () => {

	return (
		<section className = "pegas-body__home home">

			<h4> Привет!</h4>

			<p>
				Меня зовут Егор, я начинающий frontend-разработчик.
				Создал данный проект в качестве резюме 
				и демонстрации своих навыков в использованиии 
				HTML, Css, JavaScript, React, Redux, Scss 
				и сторонего сервиса firebase от фирмы Google для авторизации на страницах "Contacts", "Tasks" и сохранения введенной на них информации пользователем.
			</p>
			
			<h2>Описание</h2>

			<p>
				Данный проект состоит из следующих разделов:
			</p>
				
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
						&nbsp;- раздел с моими контактами и описания опыта.
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
			</ul>

			<p>
				Разделами Contacts и Tasks можно пользоваться только после авторизации или регистрации в проекте. 
				Авторизация или регистрация пользователя проходит через сервис аутентификации firebase от Goole, 
				в качестве логина используется адрес электронной почты, 
				а пароль должент содержать миниму 6 символов. 
				Проверку правильности составленного логина 
				или предотвращение возможного дублирования логина делает сервис firebase. 
				Авторизация пользователья сохраняется после закрытия вкладки или закрытия браузера, для сброса авторизации нужно нажать на ссылку Log Out.
			</p>

			<p>
				При работе с разделами Contacts или Tasks придусмотренно автосахранение
				если пользователь при работе с одним из контактов или задачи не закрыл их описание:
			</p>
			
			<ul>
				<li>
					переходит на другую;
				</li>
				<li>
					создает новую задачу или контакт;
				</li>
				<li>
					начинает ввод в поисковой строке;
				</li>
				<li>
					делает клик по ссылке на другую страницу проекта
					или на log Out
				</li>
			</ul>

			<p>
				Загрузка файлов для задач или загрузка изображений для контактов происходит в фоновом режиме:
			</p>

			<ul>
				<li>
					можно загружать файлы пачками для различных задач и фотографии для нескольких контактов одного пользователя одновременно;
				</li>
				<li>
					загружаемые файлы выделены полосой загрузки;
				</li>
				<li>
					загрузку файлов к задаче можно отменить; 
				</li>
				<li>
					загруженные файлы к задаче и изображения к контактам можно удалять для обновления.
				</li>
			</ul>
			<p>
				Но загрузка прикращается сразу по нажатию ссылки Log Out, закрытию страницы или закрытию браузера.
			</p>

			<p>
				Для сохранения информации введенной от пользователя используется Realtime Database сервиса firebase от Google, а для сохранения файлов прикрепленных к задаче и изображений контактов используется Storage сервиса firebase от Google.
			</p>
			
			
			<h3>Contacts</h3>
			<p>
			Контакт состоит из трех разделов:
			</p>
			<ul>
				<li>
					раздел с описанием имени, фамилии и отчества;
				</li>
				<li>
					раздел с описанием контактных данных;
				</li>
				<li>
					и раздела с изображением контакта.
				</li>
			</ul>
			
			<p>
				Для контактных данных придусмотрен быстрый переход по клику на описании поля. Если это номер телефона, то произойдет набор номера, если ссылка на профиль в телеграмме или на GitHub, то откроется новое окно для перехода на профиль, если адрес электронной почты, то почтовый агент.	
			</p>
			<p>
				Для набора номера в поле телефона должно быть введено 10 цифр номер (код города и номер телефона, или мобильный номер, можно начиная с цифры 8 или +7)
			</p>
			<p>
				Для поля GitHub и телеграм нужно ввести только название профиля пользователя,
				так же для телеграм можно вести название профиля с @ или без @.
			</p>
			<p>
				Изображение для контата можно загружать любого расширения типа image/*, минимум размером 180х200.
				Если изображение более большего размера, загрузчик сожмет его до нужных ему габаритов и соответственно уменьшит вес изображения для более быстрой загрузки.
			</p>

			<h3>Tasks</h3>

			<p>
				Каждая задача разделена на части:
			</p>
			<ul>
				<li>
					заголовок;
				</li>
				<li>
					описание задачи;
				</li>
				<li>
					возможность прикреплять файлы к задаче;
				</li>
				<li>
					дата до которой необходимо выполнить задачу;
				</li>
				<li>
					состояние о готовности выполнения задачи в виде чек бокса.
				</li>
			</ul>

			<p>
				На цвет заголока влияет состояние готовности выполнения задачи.
				Так же состояние готовности выполнения задачи влияет на отображении даты до которой необходимо выполнить задачу, при завершенной задаче дата не отображается.
				Состояние готовности выполнения задачи при создании новой задачи не отображается.
			</p>
			<p></p>
		</section>

	)
}

export default Home