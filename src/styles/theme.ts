import { css } from "styled-components";

const button = css`
    color: var(--link-color);
    background-color: transparent;
    border: 1px solid var(--link-color);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    padding: 1.25rem 1.75rem;
    transition: var(--transition);

    &:hover, &:focus-visible {
        outline: none;
        box-shadow: 4px 4px 0 0 var(--link-hover);
        transform: translate(-5px, -5px);
    }

    &:after {
        display: none !important;
    }
`;

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
            color: var(--link-hover);
            outline: 0;
        }
    `,

    inlineLink: css`
        display: inline-block;
        position: relative;
        color: var(--link-color);
        text-decoration: none;
        transition: var(--transition);

        &:hover, &:focus-visible {
            color: var(--link-hover);
            outline: 0

            & > * {
                color: var(--link-hover) !important;
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
            background-color: var(--link-hover);
            opacity: 0.5;
        }
    `,

    boxShadow: css`
        box-shadow: 0 10px 30px -15px var(--charcoal-shadow);
        transition: var(--transition);

        &:hover, &:focus-visible {
            box-shadow: 0 20px 30px -15px var(--charcoal-shadow);
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
                color: var(--link-color);
            }
        }
  `,

  
    resetList: css`
        list-style: none;
        padding: 0;
        margin: 0;
    `,
  
    button,
    
    smallButton: css`
        color: var(--link-color);
        background-color: transparent;
        border: 1px solid var(--link-color);
        border-radius: var(--border-radius);
        padding: 0.75rem 1rem;
        font-size: var(--fz-xs);
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        transition: var(--transition);
        
        &:hover, &:focus-visible {
            outline: none;
            box-shadow: 3px 3px 0 0 var(--link-hover);
            transform: translate(-4px, -4px);
        }
            
        &:after {
            display: none !important;
        }
    `,

    bigButton: css`
        color: var(--white);
        background-color: transparent;
        border: 1px solid var(--orange-accent);
        border-radius: var(--border-radius);
        padding: 1.25rem 1.75rem;
        font-size: var(--fz-sm);
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        transition: var(--transition);
    
        &:hover, &:focus-visible {
            outline: none;
            box-shadow: 4px 4px 0 0 var(--orange-accent);
            transform: translate(-5px, -5px);
        }
    
        &:after {
            display: none !important;
        }
    `,
};

export default theme;