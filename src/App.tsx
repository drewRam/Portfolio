import NavBar from './components/NavBar';
import { theme, GlobalStyle } from 'styles';
import { Layout, Hero, About, Experience, Contact } from 'components';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar/>
        <main className="fillHeight">
          <Layout>
            <Hero />
            <About />
            <Experience />
            <Contact />
          </Layout>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;