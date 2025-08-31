import React, { ReactNode, useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { NavBar, Social, Email, Footer } from "components";
import { GlobalStyle, theme } from "styles";
import { Location } from 'react-router-dom';

const StyledLayout = styled.div`
    display:flex;
    flex-direction: column;
    min-height: 100vh;
`;

interface LayoutProps {
    children: ReactNode,
    location: Location,
}

const Layout: React.FC<LayoutProps> = ({ children, location }: LayoutProps) => {
    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState<Boolean>(isHome);

    // Sets target="_blank" rel="noopener noreferrer" on external links
    const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a'));
    if (allLinks.length > 0) {
            allLinks.forEach(link => {
            if (link.host !== window.location.host) {
                link.setAttribute('rel', 'noopener noreferrer');
                link.setAttribute('target', '_blank');
                }
            });
        }

    };

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (location.hash) {
            const id = location.hash.substring(1); // location.hash without the '#'
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView();
                    el.focus();
                }
            }, 0);
        }

        handleExternalLinks();
    }, [isLoading, location]);

    return (
        <>
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />

                    <StyledLayout>
                        <NavBar isHome={isHome}/>
                        <Social isHome={isHome}/>
                        <Email isHome={isHome}/>
                        <div id="content">
                            {children}
                            <Footer />
                        </div>
                    </StyledLayout>
                </ThemeProvider>
            </div>
        </>
    );
};

export default Layout;