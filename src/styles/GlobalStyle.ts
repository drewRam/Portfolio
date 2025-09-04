import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import theme from "./theme";
import transitionStyles from "./transitionStyles";

declare module "styled-components" {
  export type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}

const GlobalStyle = createGlobalStyle`
    ${ variables };
    ${ transitionStyles };

    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    ::selection {
        background-color: var(--charcoal-blue-gray);
        color: var(--near-white);
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--charcoal-blue-gray);
        color: var(--slate);
        font-family: var(--font-sans);
        line-height: 1.3;

        @media (max-width: 480px) {
            font-size: var(--fz-lg);
        }

        &.hidden {
            overflow: hidden;
        }

        &.blur {
            overflow: hidden;

            header {
                background-color: transparent;
            }

            #content > * {
                filter: blur(5px) brightness(0.7);
                transition: var(--transition);
                pointer-events: none;
                user-select: none;
            }
        }
    }

    // Scrollbar Styles
    html {
        scrollbar-width: thin;
        scrollbar-color: var(--dark-slate) var(--navy);
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: var(--navy);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--dark-slate);
        border: 3px solid var(--navy);
        border-radius: 10px;
    }

    #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
    }

    main {
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
        min-height: 100vh;
        padding: 25px 150px;

        @media (max-width: 1080px) {
            padding: 200px 100px;
        }

        @media (max-width: 768px) {
            padding: 150px 50px;
        }

        @media (max-width: 480px) {
            padding: 125px 25px;
        }

        &.fillHeight {
            padding: 0 150px;

            @media (max-width: 1080px) {
                padding: 0 100px;
            }

            @media (max-width: 768px) {
                padding: 0 50px;
            }

            @media (max-width: 480px) {
                padding: 0 25px;
            }
        }
    }

    section {
        margin: 0 auto;
        padding: 100px 0;
        max-width: 1000px;

         @media (max-width: 768px) {
            padding: 80px 0;
        }

        @media (max-width: 480px) {
            padding: 60px 0;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 10px 0;
        font-weight: 600;
        color: var(--near-white);
    }

    .big-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 80px);
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);

        &:hover, &:focus {
            color: var(--link-hover);
        }

        &.inline-link {
            ${({ theme }) => theme.inlineLink};
        }
    }

    p {
        margin: 0 0 15px 0;

        &:last-child, &:last-of-type {
            margin: 0;
        }

        & > a {
            ${({ theme }) => theme.inlineLink};
        }

        & > code {
            background-color: var(--light-navy);
            color: var(--white);
            font-size: var(--fz-sm);
            border-radius: var(--border-radius);
            padding: 0.3em 0.5em;
        }
    }

    button {
        cursor: pointer;
        border: 0;
        border-radius: 0;
    }

    .title-heading {
        display: flex;
        align-items: center;
        position: relative;
        margin: 10px 0 40px;
        width: 100%;
        font-size: clamp(26px, 5vw, var(--fz-heading));
        white-space: nowrap;
        padding-bottom: 20px;

        &:after {
            content: '';
            flex: 1;
            margin-top: 10px;
            height: 1px;
            background-color: rgba(51, 154, 240, 1); // link-hover color
            margin-left: 20px;
        }
    }
`;

export default GlobalStyle;