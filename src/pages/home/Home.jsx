import { PrintInfo } from "../../components/commonComponents/printInfo.jsx/PrintInfo"
import { Contacts } from "../../components/homeComponents/Contacts"
import { Description } from "../../components/homeComponents/Description"
import { Intro } from "../../components/homeComponents/Intro"
import { Tasks } from "../../components/homeComponents/Tasks"

const Home = () => (
	<section className="pegas-body__home home">
		
		<PrintInfo />
		
		<Intro />
		
		<Description />
		
		<Contacts />

		<Tasks />

	</section>
)


export default Home