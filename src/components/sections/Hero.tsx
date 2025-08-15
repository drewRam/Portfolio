import React, { useState, useEffect, useRef, ReactNode } from "react";
import { navDelay, loaderDelay } from "../../utils/index";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { usePrefersReducedMotion } from "../../hooks";
import styled from "styled-components";

const StyledHeroElement = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
    padding: 0;

    @media (max-height: 700px) and (min-width: 700px),
            (max-width: 360px) {
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
        line-height: 0.9;
    }

    p {
        margin: 20px 0 0;
        max-width: 540px;
    }

    .email-link {
        margin-top: 50px;
        padding: 1rem 1.5rem;
        border: 1px solid var(--green);
        color: var(--green);
        background: transparent;
        text-decoration: none;
        font-size: var(--fz-sm);
        font-family: var(--font-mono);
        border-radius: var(--border-radius);
        transition: background 0.3s ease, color 0.3s ease;

        &:hover {
        background: var(--green-tint);
        color: var(--navy);
        }
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
    const prefersReducedMotion = usePrefersReducedMotion();
    const oneRef = useRef<HTMLDivElement>(null);
    const twoRef = useRef<HTMLDivElement>(null);
    const threeRef = useRef<HTMLDivElement>(null);
    const fourRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, [prefersReducedMotion]);

    const items: HeroItem[] = [
        { node: <h1>Hi, my name is</h1>, ref: oneRef },
        { node: <h2 className="big-heading">Andrew Ramirez.</h2>, ref: twoRef },
        { node: <h3 className="big-heading">I build things for the web.</h3>, ref: threeRef },
        { node: (
        <p>
            I'm a software engineer... <a href="https://google.com/" target="_blank" rel="noreferrer">Google</a>.
        </p>
        ), ref: fourRef }
    ];

    return (
        <StyledHeroElement>
            {prefersReducedMotion ? (
                <>
                    {items.map((item, i) => (
                        <div key={i}>{item.node}</div>
                    ))}
                </>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted &&
                        items.map((item, i) => {
                            // Compute delay in a type-safe way
                            const delay: string = `${(i + 1) * 100}ms`;
                            return ((
                            <CSSTransition key={i} nodeRef={item.ref} classNames="fadeup" timeout={loaderDelay}>
                                <div ref={item.ref} style={{ transitionDelay: delay }}>{item.node}</div>
                            </CSSTransition>
                        ))})}
                </TransitionGroup>
            )}
        </StyledHeroElement>
    );
}

export default Hero;