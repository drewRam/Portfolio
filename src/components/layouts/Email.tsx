import React from "react";
import styled from "styled-components";
import { config } from "config";
import { ContactPanel } from "components";

const StyledEmailList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: var(--white);

    }

    a {
        margin: 20px auto;
        padding: 10px;
        font-family: var(--font-mono);
        font-size: var(--fz-xxs);
        line-height: var(--fz-lg);
        letter-spacing: 0.1em;
        writing-mode: vertical-rl;

        &:hover, &:focus {
            transform: translateY(-3px);   
        }
    }
`;

interface EmailProps {
  isHome: boolean;
}

const Email: React.FC<EmailProps> = ({ isHome }) => (
    <ContactPanel isHome={isHome} orientation="right">
        <StyledEmailList>
            <a href={`mailto:${config.email}`}>{config.email}</a>
        </StyledEmailList>
    </ContactPanel>
);

export default Email;