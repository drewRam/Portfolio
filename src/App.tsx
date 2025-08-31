/**
 * 
 * This project uses CSS/styling adapted from [Brittany Chiang's website](https://github.com/bchiang7).  
 * Thank you to Brittany for making the original code open-source.
 * 
 */

import { Layout, Hero, About, Experience, Contact } from 'components';
import { useLocation } from 'react-router-dom';


const App = () => {
  const location = useLocation(); 

  return (
    <Layout location={location}>
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
    </Layout>
  );
}

export default App;