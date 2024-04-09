export const AboutExperience = () => {

	// console.log(" AboutExperience render...")

	return (
		<div className="about__experience">
		
			<h2>Frontend-разработчик</h2>
			<p>Формат работы fullTime, удаленно или в офисе московской локации.</p>

			<h2>Опыт и проекты</h2>
			<p>
				Привет! Меня зовут Егор, я начинающий frontend-разработчик.
				Мой основноый опыт в разработке учебных проектов
				и выполнении тестовых задач.
				Идея создания этого ресурса
				появилась при выполнении тестовых задач
				по созданию отдельных страниц с допуском к ним только после авторизации
				и	списка задач, в котором к каждой задаче, помимо названия, есть поле описания задачи,
				возможность прикрепления файлов,
				а так же установления даты срока выполнения и состояния о выполнении задачи.
			</p>
			<p>
				Опыт работы с React, Redux, Scss и TypeScript с июня 2022 года.
				Первый проект на React колесо фортуны (<a href="https://github.com/EgorPass/react-wheel.git" /> ),
				которое изначально было сделано на HTML, CSS и ES6.
				В ходе рефакторинга научился:
			</p>
			<ul>
				<li>
					работать с классовыми и функциональными компонентами;
				</li>
				<li>
					использовать состояние классового компонента для перерисовки дочерних компонентов;
				</li>
				<li>
					использовать состояние, методы жизненого цикла и ссылки React для создания анимации за счет Canvas холста.
				</li>
			</ul>
		
			{/* от этого момента все части должны подгружаться динамически */}
		

			{/* 1 messure */}

			<p>
				Для ознакомления использования способов типизации TypeScript и работы с Redux сделал todolist (<a href="https://github.com/EgorPass/todolist.git" />):
			</p>
			<ul>
				<li>
					выполненно все на функциональных компонентах;
				</li>
				<li>
					работа с контекстом и хуками React;
				</li>
				<li>
					использование стейтменеджера Redux и его хуков для работы с его состоянием и экшенами;
				</li>
				<li>
					типизация функциональных компонетов React, Redux, хуков и методов для обработки кликов.
				</li>
			</ul>
			<p>
				В ходе выполнения тестового задания по созданию страницы контактов (<a href="https://github.com/EgorPass/contact-list.git" />),
				которую можно использовать только после атвторизации:
			</p>
			<ul>
				<li>
					поверхностно ознакомился с сервисом firebase от Google для возможности использования их утилиты по авторизации;
				</li>
				<li>
					изучил возможности новой версии Redux,
					в частности новые способы создания экшенов, асинхронных экшенов и способы обработки их в редьюсерах;
				</li>
				<li>
					научился работать с Scss, а именно использовать переменные, шаблоны, миксины и удобный способ работы с вложенными классами, что в ходе заинтересовало в изучении БЭМ методологии.
				</li>
			</ul>
			{/* <p>
				Задание по созданию формы для расчета стоимости приобретения автомобиля в кредит
				(<a href="https://github.com/EgorPass/leasing-for-car.git" target="_blank" />) выполнял по заранее созданному шаблону в Figmа, никогда ранее, до этого задания не было так легко и просто работать со стилями для приложения.
			</p> */}

			<p>
				Проект inko является учебным проектом по созданию серверной (<a href="https://github.com/EgorPass/inko_back.git" target="_blank" />) и клиентской (<a href="https://github.com/EgorPass/inko_front.git" target="_blank" />) частей, в которых реализованы:
			</p>
			<ul>
				<li>
					аутентификация и авторизация пользователей за счет токенов;
				</li>
				<li>
					возможность наделения каждого пользователея отдельным набором прав:
					<ul>
						<li>
							скачивать контент;
						</li>
						<li>
							создавать контент;
						</li>
						<li>
							создавать пользователей.
						</li>
					</ul>
				</li>
				<li>
					встроенный pdf reader, созданный на библиотеке pdfjs;
				</li>
				<li>
					возможность создания описания к каждому разделу (сделано на draftjs);
				</li>
				<li>
					загрузчик для файлов
				</li>
				<li>
					серверная часть, которая обрабатывает запросы с клиента;
				</li>
				<li>
					схема базы данных для хранения информации о пользователях и контенте.
				</li>
			</ul>
			
			<p>
				Приложение задумывалось как закрытое, то есть зарегистрировать пользователя может только пользователь который есть в базе и обладает на это правами. Для регистрации нового пользователя используется его адрес электронной почты, на который приходит ссылка для перехода на страницу с полями для создания пароля.
			</p>
			<p>
				 Аутентификация реализована на токенах при помощи библиотеки jsonwebtoken. Аутентификация проходит на стороне сервера за счет набора двух токенов для каждого пользователя ( токен доступа и токен для обновления ), а так же интерцептеров axios со стороны клиента для передачи токена доступа на сервер.
			</p>
			<p>
				Для хранения информации о пользователях и контенте ипользуется база данных postgreSQL, совместно с ORM Sequelize для облегчения работы с базой данных и возможностью миграцией на другую базу данных.
			</p>
			<p>
				Чтобы использовать программу для входа и создания своих пользователей используем логин: pegas1984.sd@gmail.com, пароль: 123456.
			</p>
			
			<p>
				&nbsp;
			</p>
			
			<p>
				В данном проекте помимо закрепления работы с Redux, React и его функциональными компонентами, ссылками, хуками и контекстом особое внимание уделил оптимизации отрисовок компонентов:
			</p>
			<ul>
				<li>
					мемоизация компонентов;
				</li>
				<li>
					мемоизации методов, которые работают с мемоизированными компонентам;
				</li>
				<li>
					устройство отложенной загрузки страниц проекта за счет React.lazy;
				</li>
				<li>
					построение иерархии компонентов для передачи методов в пропсы дочерних компонент, что бы как можно меньше использовать контекст React во избежании повторных отрисовок;
				</li>
				<li>
					Научился работать с базой данных NoSQl и хранилищем файлов от firebase;
				</li>
				<li>
					использование сторонних библиотек для работы с изображениями перед отправкой в хранилище;
				</li>
				<li>
					А так же изучение react-router-dom 6.
				</li>
			</ul>

			{/* 2 messure */}

			<h2>
				О себе
			</h2>

			<p>
				Уверенное знание основ языка программирования JavaScript:
			</p>
			<ul>
				<li>
					навыки построения алгоритмов для асинхронных задач (таймеры, промисы и генераторы);
				</li>
				<li>
					прототипное наследование и работа с классами;
				</li>
				<li>
					работа с методами объктов (массивов, функций, примитивов);
				</li>
				<li>
					настройка объектов (свойства акссесоры и т. п.);
				</li>
				<li>
					структур данных с которыми может работать JavaScript;
				</li>
				<li>
					понимание и использования замыкания;
				</li>
				<li>
					типизации языка и приведения типов;
				</li>
				<li>
					работа с DOM через JavaScript (манипулирование элементами страницы);
				</li>
				<li>
					опыт работы с RESTful API;
				</li>
				<li>
					навык работы с SQL (PostgreSQL) и ORM Sequelize;
				</li>
				<li>
					а так же опыт в создании приложений на библиотеке React с использованием @reduxjs/toolkit, Scss, react-router-dom, pdfjs, draftjs, react-loader-spinner, react-image-file-resizer;
				</li>
				<li>
					и опыт работы с построением серверной части на nodejs с использованием библеотек: bcrypt, jsonwebtoken, sequelize, nodemailer.
				</li>
			</ul>

			<p>
				Свободное время провожу за изучением технологий по front-end
				разработке.
				Умею разбираться в чужом коде,
				так как в процессе изучения приходится много анализировать демонстрационного кода обучающих
				ресурсов.
			</p>
		
			<p>
				На данный момент не использую библиотеки для создания UI ( Bootstrap, Materialize...), потому что интересно делать описание стилей самому.
			</p>
		
			<p>
				Долгое время работал в торговле, в том числе в прямых продажах.
				В торговле научился разносторонне смотреть на товары, продукты и услуги с учетом разнообразия потребительских интересов и возможностей.
			</p>
		
		</div>
	)
}