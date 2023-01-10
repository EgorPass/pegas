import {  memo } from "react";


import { AboutName } from "../../components/aboutComponents/AboutName";
import { AboutExperience } from "../../components/aboutComponents/AboutExperience";
import { AboutSkills } from "../../components/aboutComponents/AboutSkills";
import { AboutContacts } from "../../components/aboutComponents/AboutContacts";
import { ImageContact } from "../../components/commonComponents/image/ImageContact"


import placeholder from "../../images/placeholder.svg"

import photo from "../../images/photo/myPhoto4b.png"

import "./about.scss"
import { PrintInfo } from "../../components/commonComponents/printInfo.jsx/PrintInfo";

const About = memo( () => {
	
	// console.log( " About render.....")
	
	return (
		
		<section className="pegas-body__about about">
			
			<PrintInfo />

			<AboutName />

			<AboutContacts />

			<AboutSkills />
			
			<ImageContact
				urlPhoto = { photo ? photo : placeholder}
				classNameForContainer = "about__photo-container"
				classNameForImage = "about__photo"
			/>
			
			<AboutExperience />

		
		</section>
	)
	}
)

export default About