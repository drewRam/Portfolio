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
        { name: "Experience", url: "/#experience" },
        { name: "Projects", url: "/#projects" },
        { name: "Contact", url: "/#contact" },
    ],
    srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}