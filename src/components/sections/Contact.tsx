import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { config } from "config";
import ScrollRevealed from "utils/sr";

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
`;

const StyledButton = styled.a`
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
	margin-top: 50px;

	&:hover, &:focus-visible {
		color: var(--white);
		outline: none;
		box-shadow: 4px 4px 0 0 var(--orange-accent);
		transform: translate(-5px, -5px);
	}

	&:after {
		display: none !important;
	}
`;

const Contact: React.FC = () => {
	const revealContainer = useRef<HTMLElement | null>(null);

	useEffect(() => {
		ScrollRevealed!.reveal(revealContainer.current!, config.srConfig());
	}, []);

	return (
		<StyledContactSection id="contact" ref={revealContainer}>
			<h2 className="title">Contact</h2>
			<p>
				I’m currently open to new opportunities, whether it’s a full-time role, a freelance project, 
				or a chance to collaborate with other developers and creators. If you think I’d be a good fit 
				for your team or project, feel free to get in touch—I’d love to connect!
			</p>
			<StyledButton href={`mailto:${config.email}`}>
				Message Me
			</StyledButton>
		</StyledContactSection>
	);
};

export default Contact;
