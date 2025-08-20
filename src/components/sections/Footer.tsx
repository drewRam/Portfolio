import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "config";
import Icon from "../icons/IconSelector";

interface GithubInfo {
    stars: number | null,
    forks: number | null,
}

// Minimal type just for the API response
interface GithubApiResponse {
  stargazers_count: number;
  forks_count: number;
}

const Footer = () => {
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
        <>
            <a href={config.socialMedia.find(link => link.name === "GitHub")?.url}>
                <div>Designed &amp; Built by Andrew Ramirez</div>
                <div className="github-stats">
                    <span>
                        <Icon name="Star" />
                        <span>stars: {githubInfo.stars?.toLocaleString() ?? '-'}</span>
                    </span>
                    <span>
                        <Icon name="Fork" />
                        <span>forks: {githubInfo.forks?.toLocaleString() ?? '-'}</span>
                    </span>
                </div>
            </a>
        </>
    );
}

export default Footer;