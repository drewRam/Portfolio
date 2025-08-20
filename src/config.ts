export interface SocailMediaLinks {
    name: string,
    url: string,
}

export interface NavigationLinks {
    name: string,
    url: string,
}

export interface Config {
    email: string,
    githubRepo: string,
    socialMediaLinks: SocailMediaLinks[],
    navigationLinks: NavigationLinks[],
}

export const config = {
    email: process.env.REACT_APP_EMAIL || '',
    githubRepo: process.env.REACT_APP_GITHUB_REPO || '',
    socialMedia: [
        { name: 'GitHub', url: process.env.REACT_APP_GITHUB || '' },
        { name: 'Linkedin', url: process.env.REACT_APP_LINKEDIN || ''},
    ],
    navigationLinks: [
        { name: "About", url: "/#about" },
        { name: "Experience", url: "/#jobs" },
        { name: "Projects", url: "/#projects" },
        { name: "Contact", url: "/#contact" },
    ]
}