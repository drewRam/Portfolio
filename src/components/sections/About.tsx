import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { config } from "config";
import ScrollRevealed from "utils/sr";
import MeImage from "../images/of_myself/Me.jpg";

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
                        Hello, I’m Andrew Ramirez, a software engineer with 7+
                        years of experience building full-stack applications,
                        backend services, and data-intensive systems.
                    </p>
                    <p>
                        My experience spans Python, React, TypeScript, SQL, REST
                        APIs, and cloud infrastructure, with a focus on building
                        scalable software and solving complex engineering
                        problems. I’ve worked across enterprise applications,
                        workforce intelligence platforms, distributed systems,
                        and data-processing pipelines, including engineering
                        solutions used across 50+ client environments.
                    </p>
                    <p>
                        I’m currently focused on independent software
                        development, exploring AI and agentic systems while
                        continuing to build modern applications and deepen my
                        expertise in algorithms, data structures, and software
                        architecture.
                    </p>
                    <p>
                        Outside of traditional software development, I’m
                        passionate about game development and interactive
                        experiences. I enjoy combining engineering with
                        creativity to build projects from the ground up and
                        explore new ways technology can be used to create
                        engaging experiences.
                    </p>
                </div>
                <StyledSelfPortrait>
                    <img src={MeImage} alt="Headshot" width={350} />
                </StyledSelfPortrait>
            </div>
        </AboutWrapper>
    );
};

export default About;
