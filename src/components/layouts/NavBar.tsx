import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { config, NavigationLinks } from "config";
import { useScrollDirection } from "hooks";

const { navigationLinks }: { navigationLinks: NavigationLinks[] } = config;

interface StyledHeaderProps {
	$scrollDirection: "up" | "down";
  	$scrolledToTop: boolean;
  	$mounted: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	padding: 0px 50px;
	width: 100%;
	height: var(--nav-height);
	background-color: var(--nav-bar-color);
	filter: none !important;
	pointer-events: auto !important;
	user-select: auto !important;
	backdrop-filter: blur(10px);
	transition: var(--transition);

	@media (max-width: 1080px) {
		padding: 0 40px;
	}

	@media (max-width: 768px) {
		padding: 0 25px;
	}

	${({ $scrollDirection, $scrolledToTop }) =>
	$scrollDirection === "up" && !$scrolledToTop && css`
		height: var(--nav-scroll-height);
		transform: translateY(0px);
		background-color: var(--nav-bar-color);
		box-shadow: 0 10px 30px -10px var(--charcoal-shadow);
	`};

	${({ $scrollDirection, $scrolledToTop }) =>
		$scrollDirection === "down" && !$scrolledToTop && css`
		height: var(--nav-scroll-height);
		transform: translateY(calc(var(--nav-scroll-height) * -1));
		box-shadow: 0 10px 30px -10px var(--charcoal-shadow);
	`};
`;

const StyledNavigation = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	color: var(--near-white);
	font-family: 'Fira Code', monospace;
	font-family: var(--font-mono);
	z-index: 11;
`;

const StyledNavigationList = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
  
	ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
		padding: 0;
		margin: 0;
		list-style: none;

		li {
			margin: 0 5px;
			position: relative;
			font-size: var(--fz-xs);

			a {
			padding: 10px;
			}
		}
  	}
`;

interface NavBarProps {
  isHome: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isHome }) => {
	const [scrolledToTop, setScrolledToTop] = useState(true);
	const [mounted, setMounted] = useState<boolean>(!isHome);
	const scrollDirection = useScrollDirection({ initialDirection: "down" });
	const homeRef = useRef<HTMLDivElement>(null);
	const navRefs = useRef<React.RefObject<HTMLLIElement>[]>([]);
	const timeout = isHome ? 2000 : 0;
	const fadeClass = isHome ? "fade" : '';
	const fadeDownClass = isHome ? "fadedown" : '';
  
	if (navRefs.current.length !== navigationLinks.length) {
		navRefs.current = navigationLinks.map((_, i) => navRefs.current[i] ?? React.createRef<HTMLLIElement>());
	}

	useEffect(() => {
		const handleScroll = () => {
		setScrolledToTop(window.scrollY < 50);
		};
	
		window.addEventListener("scroll", handleScroll);
		setMounted(true); 
		
		return () => window.removeEventListener("scroll", handleScroll)
		// eslint-disable-next-line
	}, []);

	return (
		<StyledHeader $scrollDirection={scrollDirection} $scrolledToTop={scrolledToTop} $mounted={mounted}> 
			<StyledNavigation>
			<TransitionGroup component="div">
				{mounted ? (
				<CSSTransition nodeRef={homeRef} classNames={fadeClass} timeout={timeout}>
					<div ref={homeRef}>
					<a href='/'>Home</a>
					</div>
				</CSSTransition>
				) : []}
			</TransitionGroup>
			<StyledNavigationList>
				<TransitionGroup component="ul">
					{mounted ? 
					navigationLinks.map(({url, name}, i) => (
						<CSSTransition key={url} nodeRef={navRefs.current[i]} classNames={fadeDownClass} timeout={timeout}>
						<li ref={navRefs.current[i]} style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
							<a href={url}>{name}</a>
						</li>
						</CSSTransition>
					)) : []}
				</TransitionGroup>
			</StyledNavigationList>
			</StyledNavigation>
		</StyledHeader>
	);
};

export default NavBar;