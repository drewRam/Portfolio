import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { config } from "config";
import ScrollRevealed from "utils/sr";
import MeImage from "../images/of_myself/Me.jpg"

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
        width: 70%;
    }
`;

const About: React.FC = () => {
    const revealContainer = useRef(null);
  
    useEffect(() => {
        ScrollRevealed!.reveal(revealContainer.current!, config.srConfig());
    }, []);

    return (
        <AboutWrapper id="about" ref={revealContainer}>
            <h2 className="title-heading">About Me</h2>
            <div className="bio-section">
                <div>
                    <p>
                        Hi, my name is Andrew, and I’m a full-stack developer and game enthusiast. My programming journey began as a kid, playing Resident Evil 2 with my brother — that curiosity turned into a passion for building and problem-solving through code.
                    </p>
                    <p>
                        Today, I’ve had the privilege of working as a Lead Full Stack Developer at{' '}
                        <a href="https://prosearch.com" target="_blank" rel="noreferrer">Prosearch</a>, where I’ve architected and delivered scalable web applications. 
                        I’ve also gained hands-on experience as a Web Developer at the{' '}
                        <a href="https://unomaha.edu" target="_blank" rel="noreferrer">University of Nebraska at Omaha</a> and through internships, sharpening my skills in React, Node.js, Python, and cloud-based systems.
                    </p>
                    <p>
                        I’m a software engineer and a game developer at heart. I independently create games, combining programming, animation, and storytelling to craft engaging interactive experiences. 
                        You can check out my projects on{' '}
                        <a href="https://displacementgamedev.itch.io/" target="_blank" rel="noreferrer">Itch.io</a> or explore more on my{' '}
                        <a href="https://displacementgaming.com/" target="_blank" rel="noreferrer">game development website</a>.
                    </p>
                </div>
                <StyledSelfPortrait>
                    <img src={MeImage} alt="Headshot" width={350} />
                </StyledSelfPortrait>
            </div>
        </AboutWrapper>
    );
}

export default About;