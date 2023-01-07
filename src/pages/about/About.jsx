import {  memo , lazy, useEffect, Suspense} from "react";


import { AboutName } from "../../components/aboutComponents/AboutName";
import { AboutExperience } from "../../components/aboutComponents/AboutExperience";
import { AboutSkills } from "../../components/aboutComponents/AboutSkills";
import { AboutContacts } from "../../components/aboutComponents/AboutContacts";
import { ImageContact } from "../../components/commonComponents/image/ImageContact"


import placeholder from "../../images/placeholder.svg"

import photo from "../../images/photo/myPhoto1.jpg"

import "./about.scss"

const About = memo( () => {
	
	console.log( " About render.....")
	
	return (
		
		<section className="pegas-body__about about">
			
			<AboutName />

			<AboutContacts />

			<AboutExperience />
			
			<AboutSkills />

			<ImageContact
				urlPhoto = { photo ? photo : placeholder}
				classNameForContainer = "about__photo-container"
				classNameForImage = "about__photo"
			/>
		
		</section>
	)
	}
)

export default About