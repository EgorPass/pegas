import { memo } from "react";

import { Anchor } from "../commonComponents/anchor/Anchor";

import "./footer.scss"

export const Footer = memo( () => (
		<footer className="pegas-body__body-footer body-footer">

			<div className = "body-footer__container">

				<div
					className="body-footer__contacts"
				>
					<span 
						className="body-footer__contact-item"
						>Пасюков Егор</span>
					
					<Anchor
						href = "tel:+79146287409"
						// className=" body-footer__contact-item body-footer__contact-anch"
					>
						8 914 628 74 09
					</Anchor>

					<span 
						className="body-footer__contact-item"
					>
						pegas1984.sd@gmail.com
					</span>
				</div>
				
				<div
					className="body-footer__contacts"
				>
					<Anchor
						href="https://github.com/EgorPass"
						// className="body-footer__contact-item body-footer__contact-anch"
					>
						GitHub
					</Anchor>
					
					<Anchor
						href="https://t.me/pegas1984"
						// className="body-footer__contact-item body-footer__contact-anch"
					>
						Написать в телегу
					</Anchor>

					<Anchor
						href="mailto:pegas1984.sd@gmail.com"
						// className="body-footer__contact-item body-footer__contact-anch"
					>
						Написать на email
					</Anchor>

				</div>

			</div>

		</footer >
	)
)