import React from "react";
import styled from "styled-components";

const StyledProjectsSection = styled.section`
    ${({ theme }) => theme.flexColumnCenter };

    h2 {
        font-size: clamp(24px, 5vw, var(--fz-heading));
    }
`;

const StyledProjects = styled.li`
    position: relative;
    cursor: default;
    transition: var(--transition);

    @media (prefers-reduced-motion: no-preference) {
        &:hover,
        &:focus-within {
            .project-inner {
                transform: translateY(-7px);
            }
        }
    }

    a {
        position: relative;
        z-index: 1;
    }

    .project-inner {
        ${({ theme }) => theme.boxShadow};
        ${({ theme }) => theme.flexBetween};
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        border-radius: var(--border-radius);
        background-color: var(--light-navy);
        transition: var(--transition);
        overflow: auto;
    }

    .project-top {
        ${({ theme }) => theme.flexBetween};
        margin-bottom: 35px;

        .folder {
            color: var(--green);
            
            svg {
                width: 40px;
                height: 40px;
            }
        }

        .project-links {
            display: flex;
            align-items: center;
            margin-right: -10px;
            color: var(--light-slate);

            a {
                ${({ theme }) => theme.flexCenter};
                padding: 5px 7px;

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
    }

    .project-title {
        margin: 0 0 10px;
        color: var(--lightest-slate);
        font-size: var(--fz-xxl);

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

    .project-description {
        color: var(--light-slate);
        font-size: 17px;

        a {
            ${({ theme }) => theme.inlineLink};
        }
    }

    .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
        font-family: var(--font-mono);
        font-size: var(--fz-xxs);
        line-height: 1.75;

        &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`;

const Projects = () => {
    return (
        <>
        </>
    );
}

export default Projects;