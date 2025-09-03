import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Icon from "components/icons/IconSelector";
import sr from "utils/sr";
import { config } from "config";

// Import your JSON + images manually
import murmurData from "../../components/images/featured_projects/Murmur/index.json";
import murmurCover from "../../components/images/featured_projects/Murmur/cover.png";
import FlashcardData from "../../components/images/featured_projects/Flashcard_Generator/index.json"
import FlashcardCover from "../../components/images/featured_projects/Flashcard_Generator/cover.png";
import GANData from "../../components/images/featured_projects/GAN_tutorial/index.json";
import GANCover from "../../components/images/featured_projects/GAN_tutorial/cover.gif";


const StyledProjectsGrid = styled.ul`
    ${({ theme }) => theme.resetList};

    a {
        position: relative;
        z-index: 1;
    }
`;

const StyledProject = styled.li`
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    @media (max-width: 768px) {
        ${({ theme }) => theme.boxShadow};
    }

    &:not(:last-of-type) {
        margin-bottom: 100px;

        @media (max-width: 768px) {
            margin-bottom: 70px;
        }

        @media (max-width: 480px) {
            margin-bottom: 30px;
        }
    }

    &:nth-of-type(odd) {
        .project-content {
            grid-column: 7 / -1;
            text-align: right;

            @media (max-width: 1080px) {
                grid-column: 5 / -1;
            }

            @media (max-width: 768px) {
                grid-column: 1 / -1;
                padding: 40px 40px 30px;
                text-align: left;
            }

            @media (max-width: 480px) {
                padding: 25px 25px 20px;
            }
        }

        .project-tech-list {
            justify-content: flex-end;

            @media (max-width: 768px) {
                justify-content: flex-start;
            }

            li {
                margin: 0 0 5px 20px;

                @media (max-width: 768px) {
                    margin: 0 10px 5px 0;
                }
            }
        }

        .project-links {
            justify-content: flex-end;
            margin-left: 0;
            margin-right: -10px;

            @media (max-width: 768px) {
                justify-content: flex-start;
                margin-left: -10px;
                margin-right: 0;
            }
        }

        .project-image {
            grid-column: 1 / 8;

            @media (max-width: 768px) {
                grid-column: 1 / -1;
            }
        }
    }

    .project-content {
        position: relative;
        grid-column: 1 / 7;
        grid-row: 1 / -1;

        @media (max-width: 1080px) {
            grid-column: 1 / 9;
        }

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            grid-column: 1 / -1;
            padding: 40px 40px 30px;
            z-index: 5;
        }

        @media (max-width: 480px) {
            padding: 30px 25px 20px;
        }
    }

    .project-title {
        color: var(--lightest-slate);
        font-size: clamp(24px, 5vw, 28px);

        @media (min-width: 768px) {
            margin: 0 0 20px;
        }

        @media (max-width: 768px) {
            color: var(--white);

            a {
                position: static;

                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    z-index: 0;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            }
        }
    }

    .project-description {
        ${({ theme }) => theme.boxShadow};
        position: relative;
        z-index: 2;
        padding: 25px;
        border-radius: var(--border-radius);
        background-color: var(--light-navy);
        color: var(--light-slate);
        font-size: var(--fz-lg);

        @media (max-width: 768px) {
            padding: 20px 0;
            background-color: transparent;
            box-shadow: none;

            &:hover {
                box-shadow: none;
            }
        }

        a {
            ${({ theme }) => theme.inlineLink};
        }

        strong {
            color: var(--white);
            font-weight: normal;
        }
    }

    .project-tech-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 2;
        margin: 25px 0 10px;
        padding: 0;
        list-style: none;

        li {
            margin: 0 20px 5px 0;
            color: var(--light-slate);
            font-family: var(--font-mono);
            font-size: var(--fz-xs);
            white-space: nowrap;
        }

        @media (max-width: 768px) {
            margin: 10px 0;

            li {
                margin: 0 10px 5px 0;
                color: var(--lightest-slate);
            }
        }
    }

    .project-links {
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 10px;
        margin-left: -10px;
        color: var(--lightest-slate);

        a {
            ${({ theme }) => theme.flexCenter};
            padding: 10px;

            &.external {
                svg {
                    width: 22px;
                    height: 22px;
                    margin-top: -4px;
                }
            }

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }

    .project-image {
        ${({ theme }) => theme.boxShadow};
        grid-column: 6 / -1;
        grid-row: 1 / -1;
        position: relative;
        z-index: 1;
        width: 100%;
        height: 300px;

        @media (max-width: 768px) {
            grid-column: 1 / -1;
            height: 100%;
            opacity: 0.25;
        }

        a {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: var(--border-radius);
            vertical-align: middle;
        }

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 3;
            transition: var(--transition);
            mix-blend-mode: screen;
        }
    }

    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);

        @media (max-width: 768px) {
            object-fit: cover;
            width: auto;
            height: 100%;
            filter: grayscale(100%) contrast(1) brightness(50%);
        }
    }
  }
`;

interface Project {
    title: string;
    order?: number;
    cover: string;
    github?: string;
    external?: string;
    tech?: string[];
    description?: string;
}

const featuredProjects: Project[] = [
    { ...murmurData, cover: murmurCover },
    { ...FlashcardData, cover: FlashcardCover },
    { ...GANData, cover: GANCover },
];

featuredProjects.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

const Projects: React.FC = () => {
    const revealTitle = useRef<HTMLHeadingElement | null>(null);
    const revealProjects = useRef<(HTMLLIElement | null)[]>([]);
    
    useEffect(() => {
        sr!.reveal(revealTitle.current!, config.srConfig());
        revealProjects.current.forEach((ref, i) => {
            sr!.reveal(ref!, config.srConfig(i * 100))
        });
    }, []);

    return (
        <section id="projects">
            <h2 className="title-heading" ref={revealTitle}>
                Portfolio Highlights
            </h2>
            <StyledProjectsGrid>
                {featuredProjects.map((project: Project, i: number) => (
                    <StyledProject key={i} ref={(el) => {(revealProjects.current[i] = el)}}>
                    <div className="project-content">
                        <div>
                            <h3 className="project-title">
                                <a href={project.external ?? "#"}>{project.title}</a>
                            </h3>
                            <div className="project-description">
                                {project.description}
                            </div>
                            {project.tech && (
                                <ul className="project-tech-list">
                                    {project.tech.map((tech, idx) => (
                                        <li key={idx}>{tech}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} aria-label="GitHub Link">
                                        <Icon name="GitHub" />
                                    </a>
                                )}
                                {project.external && (
                                    <a
                                    href={project.external}
                                    aria-label="External Link"
                                    className="external"
                                    >
                                        <Icon name="External" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="project-image">
                        <a href={project.external ?? project.github ?? "#"}>
                            <img src={project.cover} alt={project.title} className="img" />
                        </a>
                    </div>
                    </StyledProject>
                ))}
            </StyledProjectsGrid>
        </section>
    );
}

export default Projects;