import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useScrollDirection } from 'hooks';
import { config, NavigationLinks } from 'config';

const { navigationLinks }: { navigationLinks: NavigationLinks[] } = config;

interface StyledHeaderProps {
  scrollDirection: "up" | "down",
  scrolledToTop: boolean,
}

const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  justify-content: space-between; /* replaces theme.mixins.flexBetween */
  align-items: center;           /* replaces theme.mixins.flexBetween */
  
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 80px; /* fallback for var(--nav-height) */
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease; /* fallback for var(--transition) */

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: 70px; /* fallback for var(--nav-scroll-height) */
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7); /* fallback for var(--navy-shadow) */
      `};

    ${props =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: 70px; /* fallback for var(--nav-scroll-height) */
        transform: translateY(-70px); /* match height */
        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7); /* fallback for var(--navy-shadow) */
      `};
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: #ccd6f6;
  font-family: 'Fira Code', monospace;
  counter-reset: item 0;
  z-index: 12;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #64ffda;
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 1;

      .hex-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: 0.3s ease;
      }

      .logo-container {
        position: relative;
        z-index: 1;
        svg {
          fill: none;
          user-select: none;
          transition: 0.3s ease;
          polygon {
            fill: #0a192f;
          }
        }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
        .hex-container {
          transform: translate(4px, 3px);
        }
      }
    }
  }
`;

const StyledNavigationList = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex; /* replaces theme.mixins.flexBetween */
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: 14px; /* replace var(--fz-xs) */

      a {
        padding: 10px;

        &:before {
          margin-right: 5px;
          color: #64ffda; /* replace var(--green) */
          font-size: 12px; /* replace var(--fz-xxs) */
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    display: inline-block; /* replaces theme.mixins.smallButton */
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 4px;
    padding: 0.5em 1em;
    color: #64ffda;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px; /* replace var(--fz-xs) */
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      background-color: rgba(100, 255, 218, 0.1);
      outline: none;
    }

    margin-left: 15px;
  }
`;

const NavBar = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection({ initialDirection: "down" });

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNavigation>
        <StyledNavigationList>

          <ul>
            {navigationLinks.map(({url, name}, i) => (
              <>
                <li key={i}>
                  <a href={url}>{name}</a>
                </li>
              </>
            ))}
          </ul>
        </StyledNavigationList>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default NavBar;