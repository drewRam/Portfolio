import React, { ReactNode } from "react";
import { usePrefersReducedMotion } from "hooks";
import styled from "styled-components";


interface StyledControlPanelElementProps {
  orientation: 'left' | 'right';
}

const StyledControlPanelElement = styled.div<StyledControlPanelElementProps>`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
    z-index: 10;
    color: var(--light-slate);

    @media (max-width: 1080px) {
        left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
        right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

interface ContactPanelProps {
    children: ReactNode,
    orientation: "left" | "right";
}

const ContactPanel: React.FC<ContactPanelProps> = ({ children, orientation }) => {
    return (
        <StyledControlPanelElement orientation={orientation}>
            {children}
        </StyledControlPanelElement>
    );
};

export default ContactPanel;