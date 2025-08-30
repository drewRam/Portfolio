import { css } from "styled-components";

const theme = {
    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    flexColumnCenter: css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    link: css`
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);

        &:hover, &:focus-visible {
            color: var(--green);
            outline: 0;
        }
    `,

    inlineLink: css`
        display: inline-block;
        position: relative;
        color: var(--green);
        transition: var(--transition);

        &:hover,
        &:focus-visible {
            color: var(--green);
            outline: 0;

            &:after {
                width: 100%;
            }

            & > * {
                color: var(--green) !important;
                transition: var(--transition);
            }
        }
        &:after {
            content: '';
            display: block;
            width: 0;
            height: 1px;
            position: relative;
            bottom: 0.37em;
            background-color: var(--green);
            opacity: 0.5;
        }
    `,

    boxShadow: css`
        box-shadow: 0 10px 30px -15px var(--navy-shadow);
        transition: var(--transition);

        &:hover,
        &:focus-visible {
        box-shadow: 0 20px 30px -15px var(--navy-shadow);
        }
    `,

    fancyList: css`
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: var(--fz-lg);

        li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--green);
        }
    }
  `,

    bigButton: css`
        color: var(--green);
        background-color: transparent;
        border: 1px solid var(--green);
        border-radius: var(--border-radius);
        padding: 1.25rem 1.75rem;
        font-size: var(--fz-sm);
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        transition: var(--transition);

        &:hover,
        &:focus-visible {
            outline: none;
            box-shadow: 4px 4px 0 0 var(--green);
            transform: translate(-5px, -5px);
        }
        &:after {
            display: none !important;
        }
    `,
};

export default theme;