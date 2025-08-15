import React, { useState, useEffect } from "react";
import axios from "axios";

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
        const fetchRepoStats = async () => {
            try {
                const res = await axios.get<GithubApiResponse>(
                    "https://api.github.com/repos/drewRam/website_resume"
                );
                
                // Map API fields to your state shape
                setGithubInfo({
                    stars: res.data.stargazers_count,
                    forks: res.data.forks_count,
                });
        
                console.log(res.data);
            } catch (err) {
                console.log("Failed to fetch repository data.");
            }
        };

        fetchRepoStats();
    }, []);

    return (
        <>
            <a href="https://github.com/drewRam">
                <div>Designed &amp; Built by Andrew Ramirez</div>

                <span>stars: {githubInfo.stars?.toLocaleString()}</span>
                <span>forks: {githubInfo.forks?.toLocaleString()}</span>
            </a>
        </>
    );
}

export default Footer;