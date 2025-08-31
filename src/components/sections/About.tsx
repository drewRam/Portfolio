import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { config } from "config";
import sr from "utils/sr";

const StyledAboutSection = styled.section`
    max-width: 900px;

    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;

        @media (max-width: 768px) {
        display: block;
        }
    }
`;

const StyledText = styled.div`
    ul.skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        grid-gap: 0 10px;
        padding: 0;
        margin: 20px 0 0 0;
        overflow: hidden;
        list-style: none;

        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: var(--font-mono);
            font-size: var(--fz-xs);

            &:before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--green);
            font-size: var(--fz-sm);
            line-height: 12px;
            }
        }
    }
`;

const About: React.FC = () => {
  const revealContainer = useRef(null);
  
    useEffect(() => {
        sr!.reveal(revealContainer.current!, config.srConfig());
    }, []);

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2>About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hi, my name is Andrew and I’m a full-stack developer and game enthusiast.
                            My programming journey began as a kid, playing Resident Evil 2 with my brother —
                            that curiosity turned into a passion for building and problem-solving through code.
                        </p>
                        <p>
                            Today, I’ve had the privilege of working as a Lead Full Stack Developer at,{' '}
                            <a href="https://prosearch.com" target="_blank" rel="noreferrer">Prosearch</a>{' '}
                            where I’ve architected and delivered scalable web applications. 
                            I’ve also gained hands-on experience as a Web Developer at the{' '} 
                            <a href="https://unomaha.edu" target="_blank" rel="noreferrer">University of Nebraska at Omaha</a>
                            {' '}and through internships, sharpening my skills in React, Node.js, Python, and cloud-based systems.
                        </p>
                        <p>
                            Outside of work, I love making indie games, blending code, animation, and storytelling.
                            You can check out my projects on Itch.io or explore more on my game dev site.
                        </p>
                    </div>
                </StyledText>
            </div>
        </StyledAboutSection>
    );
}

export default About;