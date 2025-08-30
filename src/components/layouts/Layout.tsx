import React, { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "components";

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
            <StyledLayout>
                <div>
                    {children}
                    <Footer />
                </div>
            </StyledLayout>
        </>
    );
};

export default Layout;