import { useLocation } from 'react-router-dom';
import { Layout, Hero, About, Experience, Contact, Projects } from 'components';

const App = () => {
	const location = useLocation(); 

	return (
		<Layout location={location}>
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</main>
		</Layout>
	);
}

export default App;