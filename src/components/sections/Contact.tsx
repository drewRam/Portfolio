import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { config } from "config";
import sr from 'utils/sr';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.bigButton};
    margin-top: 50px;
  }
`;

const Contact: React.FC = () => {
  const revealContainer = useRef<HTMLElement | null>(null);

  useEffect(() => {
      sr!.reveal(revealContainer.current!, config.srConfig());
  }, []);

  return (
      <StyledContactSection id="contact" ref={revealContainer}>
          <h2 className="title">Contact</h2>
          <p>
              I’m currently open to new opportunities, whether it’s a full-time role, a freelance project, 
              or a chance to collaborate with other developers and creators. If you think I’d be a good fit 
              for your team or project, feel free to get in touch—I’d love to connect!
          </p>
          <a className="email-link" href={`mailto:${config.email}`}>
              Message Me
          </a>
      </StyledContactSection>
  );
};

export default Contact;
