import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useScrollDirection } from 'hooks';
import { config, NavigationLinks } from 'config';

const { navigationLinks }: { navigationLinks: NavigationLinks[] } = config;

// interface StyledHeaderProps {
//   scrollDirection: "up" | "down",
//   scrolledToTop: boolean,
//   mounted: boolean,
// }

// <StyledHeaderProps>`
const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  height: var(--nav-height);

  background-color: rgba(10, 25, 47, 0.85);
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: #ccd6f6;
  font-family: 'Fira Code', monospace;
  border: 2px solid black;
`;

const StyledNavigationList = styled.div`
  margin-left: auto;
  
  ul {
    display: flex;
    list-style: none;
    border: 2px solid red;
    gap: 20px;

    li {
      margin: 0 5px;
      position: relative;
      border: 2px solid green;

      a {
        text-decoration: none;
        text-align: right;
        color: #ccd6f6;

        &:visited {
          color: #ccd6f6;
        }

        &:hover {
          color: #64ffda;
        }

        &:active {
          color: #ccd6f6; 
        }
      }
    }
  }
`;

const NavBar = () => {
  // const [scrolledToTop, setScrolledToTop] = useState(true);
  // const [mounted, setMounted] = useState<boolean>(false);
  // const scrollDirection = useScrollDirection({ initialDirection: "down" });
  
  useEffect(() => {
    // const handleScroll = () => {
    //   setScrolledToTop(window.scrollY < 50);
    // };
  
    // window.addEventListener("scroll", handleScroll);
    // setMounted(true); 
    
    // return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line
  }, []);

  return (
    <StyledHeader> {/* scrollDirection={scrollDirection} scrolledToTop={scrolledToTop} mounted={mounted}> */}
      <StyledNavigation>
        <div>
          <a href='/'>a logo here</a>
        </div>
        <StyledNavigationList>
          <ul>
              {navigationLinks.map(({url, name}, i) => (
                  <li key={i}>
                    <a href={url}>{name}</a>
                  </li>
              ))}
          </ul>
        </StyledNavigationList>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default NavBar;