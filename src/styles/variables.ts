import { css } from "styled-components";

const variables = css`
    :root {
        // Backgrounds
        --charcoal-blue-gray: rgba(37, 38, 47, 1); // Background color - Charcoal Blue-Gray
        
        // Grays / Neutrals
        --white: rgba(255, 255, 255, 1);
        --near-white: rgba(225, 225, 225, 1);
        --slate: #8892b0;

        // Shadows
        --charcoal-shadow: rgba(20, 21, 28, 0.7); // New shadow color --charcoal-shadow
        
        // Accents
        --orange-accent: rgba(255, 102, 0, 1);
        --orange-tint: rgba(175, 65, 0, 1);
        --light-navy: #112240;          // project-description-background
        
        // Links
        --link-color: rgba(77, 171, 247, 1);
        --link-hover: rgba(51, 154, 240, 1);
        --link-lighter-hover: rgba(54, 55, 66, 1);
        
        // Scrollbar
        --dark-slate: #495670;
        
        // Navbar
        --nav-bar-color: rgba(37, 38, 47, 0.85); // New nav bar color, slightly transparent
        --nav-height: 100px;
        --nav-scroll-height: 70px;
        --border-radius: 4px;

        --tab-height: 42px;
        --tab-width: 120px;

        // Fonts
        --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
                      sans-serif;
        --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    
        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xxl: 22px;
        --fz-heading: 32px;

        // Transitions
        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;

export default variables;