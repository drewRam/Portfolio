import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${variables};

    html, body {
        margin: 0;
        padding: 0;
    },

    ::selection {
        background-color: var(--lightest-navy);
        color: var(--lightest-slate);
    }

    section {
        margin: 0 auto;
        padding: 100px 0;
        max-width: 1000px;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 10px 0;
        font-weight: 600;
        color: var(--lightest-slate);
    }

    .big-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 80px);
    }
`;

export default GlobalStyle;