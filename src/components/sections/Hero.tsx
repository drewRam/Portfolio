import React, { useState, useEffect, useRef, ReactNode } from "react";
import { navDelay, loaderDelay } from "../../utils/index";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import "./Hero.css";

interface HeroItem {
  node: ReactNode;
  ref: React.RefObject<HTMLDivElement>;
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
        <section className="hero-section">
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
        </section>
    );
}

export default Hero;