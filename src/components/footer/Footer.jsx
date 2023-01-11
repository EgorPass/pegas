import { memo } from "react";

import { Anchor } from "../commonComponents/anchor/Anchor";

import "./footer.scss"

export const Footer = memo(() => {
	
	console.log("Footer render... ")

	return (
		<footer className="pegas-body__body-footer body-footer">

			<div className="body-footer__container">

				<div
					className="body-footer__contacts"
				>
					<span
						className="body-footer__contact-item"
					>Пасюков Егор</span>
					
					<Anchor
						href="tel:+79146287409"
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
					>
						GitHub
					</Anchor>
					
					<Anchor
						href="https://t.me/pegas1984"
					>
						Написать в телегу
					</Anchor>

					<Anchor
						href="mailto:pegas1984.sd@gmail.com"
					>
						Написать на email
					</Anchor>

				</div>

			</div>

		</footer >
	)
}
)