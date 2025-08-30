import React, { useState, useEffect, useRef, ReactNode } from "react";
import { navDelay, loaderDelay } from "../../utils/index";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";

const StyledHeroSection = styled.section`
    ${({ theme }) => theme.flexCenter };
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    height: 100vh;
    padding: 0;

    @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
        height: auto;
        padding-top: var(--nav-height);
    }

    h1 {
        margin: 0 0 30px 4px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h3 {
        margin-top: 5px;
        color: var(--slate);
        line-height: 1.1;
    }

    p {
        margin: 20px 0 0;
        max-width: 540px;
    }


    /* Animation classes */
    .fadeup-enter {
        opacity: 0;
        transform: translateY(20px);
    }

    .fadeup-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 300ms ease-out, transform 300ms ease-out;
    }
`;

interface HeroItem {
  node: ReactNode;
  ref: React.RefObject<HTMLDivElement | null>;
}

const Hero: React.FC = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const oneRef = useRef<HTMLDivElement>(null);
    const twoRef = useRef<HTMLDivElement>(null);
    const threeRef = useRef<HTMLDivElement>(null);
    const fourRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const items: HeroItem[] = [
        { node: <h1>Hi, my name is</h1>, ref: oneRef },
        { node: <h2 className="big-heading">Andrew Ramirez.</h2>, ref: twoRef },
        { node: <h3 className="big-heading">Full-stack dev, crafting interactive experiences.</h3>, ref: threeRef },
        { node: (
            <>
                <p>
                    I'm a software engineer and a game developer at heart. I independently create games,
                    combining programming and animation to craft engaging interactive experiences.
                    You can check out my work on {' '}
                    <a href="https://your-itch-io-link" target="_blank" rel="noreferrer">Itch.io</a>{' '}
                    or visit my{' '}
                    <a href="https://your-game-dev-site.com" target="_blank" rel="noreferrer">game development website</a>
                    .
                </p>
            </>
        ), ref: fourRef }
    ];

    return (
        <StyledHeroSection>
            <TransitionGroup component={null}>
            {isMounted &&
                items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item.node}</div>
                </CSSTransition>
                ))}
            </TransitionGroup>
        </StyledHeroSection>
    );
}

export default Hero;