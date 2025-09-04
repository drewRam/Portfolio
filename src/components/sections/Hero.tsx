import React, { useState, useEffect, useRef, ReactNode } from "react";
import { navDelay } from "../../utils/index";
import styled from "styled-components";
import MeImage from "../images/of_myself/SelfPortrait.jpg";

const HeroWrapper = styled.section`
    ${({ theme }) => theme.flexCenter };
    flex-direction: row;
    gap: 50px;
    min-height: 100vh;
    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }

    h1 {
        color: var(--near-white);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;
    }

    h2 {
        font-size: 48px;
    }

    h3 {
        font-size: 28px;
        margin-bottom: 30px;
        color: var(--near-white);
        line-height: 0.9;
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

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        text-align: center
    }
`;

const HeroImage = styled.img`
    width: 400px;
    height: auto;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 200px;
    }
`;

const HeroButtons = styled.div`
    display: flex;
    gap: 25px;
    justify-content: center;
`;

const Button = styled.a`
    padding: 16px 20px;
    border-radius: 35px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: background 0.3s ease, color 0.3s ease;

    &.primary {
        background: var(--orange-accent);
        color: var(--near-white);
    }

    &.primary:hover {
        background: var(--orange-tint); /* darker orange (adjust if needed) */
        color: var(--white);
    }

    &.secondary {
        background: transparent;
        border: 1px solid var(--orange-accent);
        color: var(--near-white);
    }

    &.secondary:hover {
        background: transparent;
        border-color: var(--orange-tint); 
        color: var(--white);
    }
`;

interface HeroItem {
  node: ReactNode;
  ref: React.RefObject<HTMLDivElement | null>;
}

const Hero: React.FC = () => {
    const [showHero, setShowHero] = useState(false);
    const oneRef = useRef<HTMLDivElement>(null);
    const twoRef = useRef<HTMLDivElement>(null);
    const threeRef = useRef<HTMLDivElement>(null);
    const fourRef = useRef<HTMLDivElement>(null);

    const items: HeroItem[] = [
        { node: <h1>Hello, I'm</h1>, ref: oneRef },
        { node: <h2>Andrew Ramirez</h2>, ref: twoRef },
        { node: <h3>Full-stack Developer</h3>, ref: threeRef },
        { node: (
            <HeroButtons>
                <Button className="primary" href="/content/static/Andrew_Ramirez_Resume.pdf" download>
                    Download Resume
                </Button>
                <Button className="secondary" href="#contact">
                    Contact Info
                </Button>
            </HeroButtons>
            ), ref: fourRef
        }
    ];

    // Show hero after navDelay
    useEffect(() => {
        const timeout = setTimeout(() => setShowHero(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <HeroWrapper>
            <HeroImage
                src={MeImage}
                alt="Hero Image"
                style={{
                    opacity: showHero ? 1 : 0,
                    transform: showHero ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 300ms ease-out ${0}ms, transform 300ms ease-out ${0}ms`
                }}
            />
            <HeroContent>
                {items.map((item, i) => (
                    <div
                        key={i}
                        ref={item.ref}
                        style={{
                            opacity: showHero ? 1 : 0,
                            transform: showHero ? 'translateY(0)' : 'translateY(20px)',
                            transition: `opacity 300ms ease-out ${i * 150 + 150}ms, transform 300ms ease-out ${i * 150 + 150}ms`
                        }}
                    >
                        {item.node}
                    </div>
                ))}
            </HeroContent>
        </HeroWrapper>
    );
}

export default Hero;
