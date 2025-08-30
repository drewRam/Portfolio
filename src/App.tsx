import { NavBar, Social, Email } from 'components';
import { theme, GlobalStyle } from 'styles';
import { Layout, Hero, About, Experience, Contact } from 'components';
import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation(); 
  const isHome = location.pathname === '/';

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar/>
        <Social isHome={isHome} />
        <Email isHome={isHome} />
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