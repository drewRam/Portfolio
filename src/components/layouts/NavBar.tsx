import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { config, NavigationLinks } from 'config';
import { useScrollDirection } from 'hooks';
import { loaderDelay } from 'utils';

const { navigationLinks }: { navigationLinks: NavigationLinks[] } = config;

interface StyledHeaderProps {
  scrollDirection: "up" | "down",
  scrolledToTop: boolean,
  mounted: boolean,
}

const StyledHeader = styled.header<StyledHeaderProps>`
  ${({ theme }) => theme.flexBetween };
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }

  ${({ scrollDirection, scrolledToTop }) =>
    scrollDirection === "up" && !scrolledToTop && css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: rgba(10, 25, 47, 0.85);
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};

  ${({ scrollDirection, scrolledToTop }) =>
    scrollDirection === "down" && !scrolledToTop && css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    `};
`;

const StyledNavigation = styled.nav`
  ${({ theme }) => theme.flexBetween };
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: 'Fira Code', monospace;
  font-family: var(--font-mono);
  z-index: 11;
  // border: 2px solid black;
`;

const StyledNavigationList = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
  
  ul {
    ${({ theme }) => theme.flexBetween };
    padding: 0;
    margin: 0;
    list-style: none;
    // border: 2px solid red;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-xs);
      // border: 2px solid green;

      a {
        padding: 10px;
      }
    }
  }
`;

interface NavBarProps {
  isHome: boolean;
}

const NavBar: React.FC<NavBarProps> = (isHome) => {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [mounted, setMounted] = useState<boolean>(!isHome);
  const scrollDirection = useScrollDirection({ initialDirection: "down" });

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? "fade" : '';
  const fadeDownClass = isHome ? "fadedown" : '';
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.scrollY < 50);
    };
  
    window.addEventListener("scroll", handleScroll);
    setMounted(true); 
    
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line
  }, []);

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop} mounted={mounted}> 
      <StyledNavigation>
        <TransitionGroup component={null}>
          {mounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <div>
                <a href='/'>Home</a>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
        <StyledNavigationList>
          <ul>
            <TransitionGroup component={null}>
              {mounted && 
                navigationLinks.map(({url, name}, i) => (
                  <CSSTransition key={url} classNames={fadeDownClass} timeout={timeout}>
                    <li key={i} style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                      <a href={url}>{name}</a>
                    </li>
                  </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>
        </StyledNavigationList>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default NavBar;