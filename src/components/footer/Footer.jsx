import { memo } from "react";

import "./footer.scss"

export const Footer = memo( () => {

	// console.log( "Footer reder..." )

	return(
		<footer className="pegas-body__body-footer body-footer">

			<div className = "body-footer__container">

				<div
					className="body-footer__contacts"
				>
					<span 
						className="body-footer__contact-item"
					>Пасюков Егор</span>
					<a
						href = "tel:+79146287409"
						className=" body-footer__contact-item body-footer__contact-anch"
					>
						8 914 628 74 09
					</a>
					<span 
						className="body-footer__contact-item"
					>pegas1984.sd@gmail.com</span>
				</div>
				
				<div
					className="body-footer__contacts"
				>
					<a
						href="https://github.com/EgorPass"
						target = "_blanc"
						className="body-footer__contact-item body-footer__contact-anch"
					>GitHub</a>
					<a
						href="https://t.me/pegas1984"
						target = "_blanc"
						className="body-footer__contact-item body-footer__contact-anch"
					>Написать в телегу</a>
					<a
						href="mailto:pegas1984.sd@gmail.com"
						// target = "_blanc"
						className="body-footer__contact-item body-footer__contact-anch"
					>Написать на email</a>
				</div>

			</div>

		</footer >
	)
} )