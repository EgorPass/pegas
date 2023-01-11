import { AboutContactItem } from "./AboutContactItem"

export const AboutContacts = () => {
	
	console.log(" AboutContacts render...")
	
	return (

		<div className="about__contacts">
		
			<AboutContactItem
				anchTitle="@pegas1984"
				href="https://t.me/pegas1984"
			>
				Телеграм
			</AboutContactItem>
	
			<AboutContactItem
				anchTitle="+7 914 628 74 09"
				href="tel:+79146287409"
			>
				Телефон
			</AboutContactItem>

			<AboutContactItem
				href="mailto:pegas1984.sd@gmail.com"
				anchTitle="pegas1984.s d@gmail.com"
			>
				Email:
			</AboutContactItem>
	
		</div>
	)
}