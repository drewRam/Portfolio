import React, { ReactNode, useState, useEffect } from "react";
import styled from "styled-components";
import { loaderDelay } from "utils";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface StyledControlPanelProps {
  orientation: 'left' | 'right';
}

const StyledControlPanel = styled.div<StyledControlPanelProps>`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
    z-index: 10;
    color: var(--white); // Icons color

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
    isHome: Boolean,
    orientation: "left" | "right";
}

const ContactPanel: React.FC<ContactPanelProps> = ({ children, isHome, orientation }) => {
    const [mounted, setMounted] = useState<Boolean>(!isHome);
    const nodeRef = React.useRef<HTMLDivElement>(null); // ref for CSSTransition
    
    useEffect(() => {
        if (!isHome) {
            return;
        }

        const timeout = setTimeout(() => setMounted(true), loaderDelay);
        return () => clearTimeout(timeout);
    }, [isHome]);

    return (
        <StyledControlPanel orientation={orientation}>
            <TransitionGroup component={React.Fragment}>
                {mounted && (
                    <CSSTransition nodeRef={nodeRef} classNames={isHome ? "fade" : ""} timeout={isHome ? loaderDelay : 0}>
                        <div ref={nodeRef}>
                            {children}
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </StyledControlPanel>
    );
};

export default ContactPanel;