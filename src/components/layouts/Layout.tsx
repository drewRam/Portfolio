import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../styles";

const StyledLayout = styled.div`
    display:flex;
    flex-direction: column;
    min-height: 100vh;
`;

interface LayoutProps {
    children: ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
        <ThemeProvider theme={theme}>
            <StyledLayout>
                <div>
                    {children}
                </div>
            </StyledLayout>
        </ThemeProvider>
        </>
    );
};

export default Layout;