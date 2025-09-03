import React, { useState, useEffect, useRef, ReactNode } from "react";
import { navDelay, loaderDelay } from "../../utils/index";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";

const HeroWrapper = styled.section`
    ${({ theme }) => theme.flexCenter };
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    min-height: 100vh;
    height: 100vh;
    padding-top: 0;

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
        margin-bottom: 25px;
        color: var(--slate);
        line-height: 0.9;
    }

    p {
        margin: 0;
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
    const [showHero, setshowHero] = useState<boolean>(false);
    const oneRef = useRef<HTMLDivElement>(null);
    const twoRef = useRef<HTMLDivElement>(null);
    const threeRef = useRef<HTMLDivElement>(null);
    const fourRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => setshowHero(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const items: HeroItem[] = [
        { node: <h1>Hello, my name is</h1>, ref: oneRef },
        { node: <h2 className="big-heading">Andrew Ramirez.</h2>, ref: twoRef },
        { node: <h3 className="big-heading">Full-stack dev, crafting interactive experiences.</h3>, ref: threeRef },
        { node: (
            <p>
                I'm a software engineer and a game developer at heart. I independently create games,
                combining programming and animation to craft engaging interactive experiences.
                You can check out my work on {' '}
                <a href="https://your-itch-io-link" target="_blank" rel="noreferrer">Itch.io</a>{' '}
                or visit my{' '}
                <a href="https://your-game-dev-site.com" target="_blank" rel="noreferrer">game development website</a>
                .
            </p>
        ), ref: fourRef }
    ];

    return (
        <HeroWrapper>
            <TransitionGroup>
            {showHero ?
                items.map((item, i) => (
                <CSSTransition key={i} nodeRef={item.ref} classNames="fadeup" timeout={loaderDelay}>
                    <div ref={item.ref} style={{ transitionDelay: `${i * 100}ms` }}>{item.node}</div>
                </CSSTransition>
                )) : null}
            </TransitionGroup>
        </HeroWrapper>
    );
}

export default Hero;