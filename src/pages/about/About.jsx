import { memo } from "react";
import "./about.scss"

export const About = memo( () => {

	return (
		<div className="pegas-body__about about">
			
			<div className="about__name">
				<h1>Пасюков Егор Александрович</h1>
			</div>

			<div className="about__contacts">
				<div className = "about__contacts-item">
					<span>
						Телеграм:
					</span>
					<a
						href="https://t.me/pegas1984"
						target = "_blanc"
					>
						@pega1984
					</a>
				</div>
				<div className="about__contacts-item">
					<span>
						Телефон:
					</span>
					<a
						href = "tel:+79146287409"
					>
						+7 914 628 74 09
					</a>
				</div>
				<div className="about__contacts-item">
					<span>
						Email:
					</span>
					<a
						href="mailto:pegas1984.sd@gmail.com"
						target = "_blanc"
					>
						pegas1984.s d@gmail.com
					</a>
				</div>
			</div>

			<div className="about__experience">
				
				<h2>Frontend-разработчик</h2>
				<p>Формат работы fullTime, удаленно или в офисе московской локации.</p>

				<h2>Опыт</h2>
				<p>
					Коммерческого опыта разработки нет,
					но есть опыт учебных проектов
					и выполнения тестовых задач. 
					Идея создания этого ресурса появилась при выполнении тестовых задач: 
					по созданию отдельных страниц с допуском к ним только после авторизации 
					и	списка задач, в котором к каждой задаче, помимо названия есть поле описания задачи,
					возможность прикрипления файлов к задаче,
					а так же установления даты срока выполнения и состояния о выполнении задачи. 
				</p>
				<p>
					Опыт работы с React, Redux, Scss и TypeScript с июня 2022 года.
					Первый проект на React попробовал сделать колесо фортуны (https://github.com/EgorPass/react-wheel.git),
					которое уже у меня было сделано на HTML, CSS и ES6.
					В ходе рефакторинга научился:
				</p>
					<ul>
						<li>
							работать с классовыми и функциональными компонентами;
						</li>
						<li>
							использовать состояние классового компонента для перересовки дочерних компонентов;
						</li>
						<li>
							использовать состояние, методы жизненого цикла и ссылки React для создания анимации за счет Canvas холста.
						</li>
					</ul>
				{/* </p> */}
				<p>
					Для ознакомления использования способов типизации TypeScript и работы с Redux сделал todolist (https://github.com/EgorPass/todolist.git):
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
					В ходе выполнения тестового задания по созданию страницы контактов (https://github.com/EgorPass/contact-list.git),
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
				<p>
					Задание по созданию формы для расчета стоимости приобретения автомобиля в кредит (https://github.com/EgorPass/leasing-for-car.git) выполнял по заранее созданному шаблону в Figmа, никогда ранее, до этого задания не было так легко и просто работать со стилями для приложения.
				</p>
				<p>
					В данном проекте по мимо закрепления работы с Redux, React и его функциональными компонентами, ссылками, хуками и контекстом особое внимание уделил оптимизации отрисовок компонентов:
					
					
				</p>
				<ul>
					<li>
						мемоизация компонентов;
					</li>
					<li>
						мемоизации методов, которые работают с мемоизированными компонентам;
					</li>
					<li>
						построение иерархии компонентов для передачи методов в пропсы дочерних компоненты, что бы как можно меньше использовать контекст React во избежании повторных отрисовок;
					</li>
					<li>
						Научился работать с базой данных NoSQl и хранилищем файлов от firebase;
					</li>
					<li>
						А так же изучение react-router-dom 6.
					</li>
				</ul>

				<h2>
					О себе
				</h2>

				<p>
					Свободное время провожу за изучением технологий по front-end
					разработке.
					Умею разбираться в чужом коде,
					так как в процессе изучения приходится много анализировать демонстрационного кода обучающих
					ресурсов.
				</p>
				<p>
					Долгое время работал в торговле, в том числе в прямых продажах.
					В торговле научился разносторонне смотреть на товары, продукты и услуги с учетом разнообразия потребительских интересов и возможностей.
				</p>
				
			</div>
			
			<div className = "about__skills-container" >
				<h2 className = "about__skills-title">	Навыки	</h2>
				<ul className = "about__skills-list">
					<li>	HTML	</li>
					<li>	CSS		</li>
					<li>	JavaScript	</li>
					<li>	React		</li>
					<li>	Reduxjs/toolkit		</li>
					<li>	Scss	</li>
					<li>	Git		</li>
					<li>	TypeScript	</li>
				</ul>
			</div>

			<div className="about__photo-container">
				<div className="about__photo"></div>

				{/* <img className = "about__img" src = { "../../images/photo/myPhoto1.jpg" } alt = "аоао" /> */}
			</div>

	
		</div>

	)
} )