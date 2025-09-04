import React from "react";
import styled from "styled-components";
import { config } from "config";
import { ContactPanel, Icon } from "components";

const StyledSocialList = styled.ul`
    display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--white);
  }

  li {
    &:last-of-type {
        margin-bottom: 20px;
    }
  }

  a {
    padding: 10px;
    transition: transform 0.2s;

    &:hover,
    &:focus {
      transform: translateY(-3px); // smooth lift effect
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const IconRing = styled.div`
    ${({theme}) => theme.flexCenter}
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--white); // ring color
    background-color: transparent; // body shows through
    transition: transform 0.2s, border-color 0.2s;

    &:hover, &:focus {
        transform: translateY(-3px);
        border-color: var(--link-hover); // change ring color on hover
    }
`;


interface SocialProps {
  isHome: boolean;
}

const Social: React.FC<SocialProps> = ({ isHome }) => (
    <ContactPanel isHome={isHome} orientation="left">
        <StyledSocialList>
            {config.socialMedia &&
                config.socialMedia.map(({ url, name }) => (
                <li key={name}>
                    <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                        <IconRing>
                            <Icon name={name} />
                        </IconRing>
                    </a>
                </li>
            ))}
        </StyledSocialList>
    </ContactPanel>
);

export default Social;