import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { config } from "config";
import sr from "utils/sr";

const AboutWrapper = styled.section`
    max-width: 900px;

    .bio-section {
        display: flex;
        flex-direction: row;
        gap: 40px;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
`;

const StyledSelfPortrait = styled.div`
    position: relative;
    max-width: 300px;

    @media (max-width: 768px) {
        margin: 50px auto 0;
        width: 70%;
    }
`;

const About: React.FC = () => {
    const revealContainer = useRef(null);
  
    useEffect(() => {
        sr!.reveal(revealContainer.current!, config.srConfig());
    }, []);

    return (
        <AboutWrapper id="about" ref={revealContainer}>
            <h2 className="title-heading">About Me</h2>
            <div className="bio-section">
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
                <StyledSelfPortrait>
                    <img src={require("../images/Me.jpeg")} alt="Headshot" width={350} />
                </StyledSelfPortrait>
            </div>
        </AboutWrapper>
    );
}

export default About;