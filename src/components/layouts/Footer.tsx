import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "config";
import Icon from "../icons/IconSelector";
import styled from "styled-components";

const StyledFooter = styled.footer`
    ${({ theme }) => theme.flexCenter};
    flex-direction: column;
    height: auto'
    min-height: 20px
    padding: 15px;
    text-align: center;
`;

const StyledSocialLinks = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        max-width: 270px;
        margin: 0 auto 10px;
        color: var(--light-slate);
    }

    ul {
        ${({ theme }) => theme.flexBetween};
        padding: 0;
        margin: 0;
        list-style: none;

        a {
            padding: 10px;

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`;

const StyledCredit = styled.div`
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1;

    a {
        padding: 10px;
    }

    .github-stats {
        margin-top: 10px;

        & > span {
            display: inline-flex;
            align-items: center;
            margin: 0 7px;
        }
        svg {
            display: inline-block;
            margin-right: 5px;
            width: 14px;
            height: 14px;
        }
    }
`;

interface GithubInfo {
    stars: number | null,
    forks: number | null,
}

// Minimal type just for the API response
interface GithubApiResponse {
  stargazers_count: number;
  forks_count: number;
}

const Footer: React.FC = () => {
    const [githubInfo, setGithubInfo] = useState<GithubInfo>({
        stars: null,
        forks: null,
    });

    useEffect(() => {
        const controller = new AbortController();

        const fetchRepoStats = async () => {
        try {
            // Extract username and optional repo from the URL
            const githubUrl = config.socialMedia.find(link => link.name === "GitHub")?.url || "";
            const username = githubUrl.match(/github\.com\/([^/]+)/)?.[1] || "";
            const repoName = config.githubRepo;

            const apiUrl = `https://api.github.com/repos/${username}/${repoName}`;

            const res = await axios.get<GithubApiResponse>(apiUrl, { signal: controller.signal });

            setGithubInfo({
                stars: res.data.stargazers_count,
                forks: res.data.forks_count,
            });
        } catch (err: any) {
            if (axios.isCancel(err)) {
                console.debug("GitHub fetch canceled");
            } else {
                console.error("Failed to fetch repository data:", err.message);
                setGithubInfo({ stars: null, forks: null });
            }
        }
        };

        fetchRepoStats();

        return () => controller.abort();
    }, []);

    return (
        <StyledFooter>
            <StyledSocialLinks>
                <ul>
                    {config.socialMedia.map(({ name, url }, i) => (
                        <li key={i}>
                            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                                <Icon name={name} />
                            </a>
                        </li>
                    ))}
                </ul>
            </StyledSocialLinks>
            <StyledCredit tabIndex={-1}>
                <a href={config.socialMedia.find(link => link.name === "GitHub")?.url}>
                    <div>Designed &amp; Built by Andrew Ramirez</div>
                    {githubInfo.stars !== null && githubInfo.forks !== null && (
                        <div className="github-stats">



                            
                        <span>
                            <Icon name="Star" />
                            <span>{githubInfo.stars.toLocaleString()}</span>
                        </span>
                        <span>
                            <Icon name="Fork" />
                            <span>{githubInfo.forks.toLocaleString()}</span>
                        </span>
                        </div>
                    )}
                </a>
            </StyledCredit>
        </StyledFooter>
    );
}

export default Footer;