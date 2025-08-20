import NavBar from './components/NavBar';
import { GlobalStyle } from 'styles';
import { Layout, Hero } from 'components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar/>
      <Layout>
        <Hero></Hero>
      </Layout>
    </>
  );
}

export default App;