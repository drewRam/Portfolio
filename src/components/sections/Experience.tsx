import React, { useState, useEffect, useRef, HTMLAttributes } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { config } from "config";
import ScrollRevealed from "utils/sr";

const StyledExperienceSection = styled.section`
	max-width: 700px;

	.layout {
		display: flex;

		@media (max-width: 600px) {
			display: block;
		}

		// Prevent container from jumping
		@media (min-width: 700px) {
			min-height: 340px;
		}
	}
    
`;
    
const StyledTabList = styled.div`
	position: relative;
	z-index: 3;
	width: max-content;
	padding: 0;
	margin: 0;
	list-style: none;

	@media (max-width: 600px) {
		display: flex;
		overflow-x: auto;
		width: calc(100% + 100px);
		padding-left: 50px;
		margin-left: -50px;
		margin-bottom: 30px;
	}

	@media (max-width: 480px) {
		width: calc(100% + 50px);
		padding-left: 25px;
		margin-left: -25px;
	}

	li {
		&:first-of-type {
			@media (max-width: 600px) {
				margin-left: 50px;
			}

			@media (max-width: 480px) {
				margin-left: 25px;
			}
		}

		&:last-of-type {
			@media (max-width: 600px) {
				padding-right: 50px;
			}

			@media (max-width: 480px) {
				padding-right: 25px;
			}
		}
	}
`;
  
type TabButtonProps = {
	$isActive: boolean;
} & HTMLAttributes<HTMLDivElement>;
    
const StyledTabButton = styled.button<TabButtonProps>`
	border: none;
	background: transparent;
	width: 100%;
	margin-right: 10px;
	padding: 0 20px 2px;
	height: var(--tab-height);
	display: flex;
	align-items: center;
	position: relative;
	color: ${({ $isActive }) => ($isActive ? 'var(--link-color)' : 'var(--slate)')};
	font-family: var(--font-mono);
	font-size: var(--fz-xs);
	white-space: nowrap;

	&:hover, &:focus {
		color: var(--link-color);
		background-color: var(--link-lighter-hover);
	}

	@media (max-width: 600px) {
		min-width: 120px;
		border-left: 0;
		border-bottom: 2px solid rgba(51, 154, 240, 1);
		justify-content: center;
	}
`;

interface HighlightProps {
	$activeTabId: number;
}

const StyledHighlight = styled.div<HighlightProps>`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	width: 2px;
	height: var(--tab-height);
	border-radius: var(--border-radius);
	background: var(--link-hover);
	transform: translateY(calc(${({ $activeTabId }) => $activeTabId} * var(--tab-height)));
	transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	transition-delay: 0.1s;

	@media (max-width: 600px) {
		top: auto;
		bottom: 0;
		width: 100%;
		max-width: var(--tab-width);
		height: 2px;
		margin-left: 50px;
		transform: translateX(calc(${({ $activeTabId }) => $activeTabId} * var(--tab-width)));
	}

	@media (max-width: 480px) {
    	margin-left: 25px;
	}
`;

const StyledTabPanels = styled.div<{ $height: number | 'auto' }>`
	position: relative;
	width: 100%;
	height: ${({ $height }) => ($height === 'auto' ? 'auto' : `${$height}px`)};
  	transition: height 0.25s ease;

	@media (max-width: 600px) {
		margin-left: 0;
	}
`;

const StyledTabPanel = styled.div`
	width: 100%;
	height: auto;
	padding: 10px 5px;

	ul {
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
	}

	h3 {
		margin-bottom: 2px;
		font-size: var(--fz-xxl);
		font-weight: 500;
		line-height: 1.3;

		.company {
			color: var(--link-color);
		}
	}

	.dates {
		margin-bottom: 25px;
		color: var(--slate);
		font-family: var(--font-mono);
		font-size: var(--fz-xs);
	}
`;

type Job = {
	date: string;
	title: string;
	company: string;
	location: string;
	dates: string;
	url: string;
	bullets: string[];
	folder?: string;
};

const Experience: React.FC = () => {
	const [jobsData, setJobsData] = useState<Job[]>([]);
	const [activeTabId, setActiveTabId] = useState(0);
	const tabs = useRef<Array<HTMLButtonElement | null>>([]);
	const revealContainer = useRef<HTMLDivElement | null>(null);
	const [tabHeight, setTabHeight] = useState<number | 'auto'>('auto');
	const panelsRef = useRef<Array<HTMLDivElement | null>>([]);

	useEffect(() => {
		async function loadJobs() {
			const folders = ["Prosearch", "UNO", "Elemental Scientific", "OCC"]; // Add more folder names as needed
			const results = await Promise.all(
			folders.map(async (folder) => {
				const res = await fetch(`/content/jobs/${folder}/index.json`);
				const data = await res.json();
				return { ...data, folder };
			})
			);

			// Sort jobs descending by start date
			const sorted = results.sort(
			(a, b) =>
				new Date(b.dates.split('–')[0].trim()).getTime() -
				new Date(a.dates.split('–')[0].trim()).getTime()
			);

			setJobsData(sorted);
		}

		loadJobs();
	}, []);

	useEffect(() => {
		ScrollRevealed!.reveal(revealContainer.current!, config.srConfig());
	}, []);

	useEffect(() => {
		if (activeTabId !== null && panelsRef.current[activeTabId]) {
			const panel = panelsRef.current[activeTabId];
			setTabHeight(panel?.scrollHeight || 'auto');
		}
	}, [activeTabId, jobsData]);


	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 600) {
			setTabHeight('auto');
			} else if (activeTabId !== null && panelsRef.current[activeTabId]) {
			setTabHeight(panelsRef.current[activeTabId]?.scrollHeight || 0);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // call once initially
		return () => window.removeEventListener('resize', handleResize);
	}, [activeTabId, jobsData]);

	return (
		<StyledExperienceSection id="experience" ref={revealContainer}>
			<h2 className="title-heading">Career Journey</h2>

			<div className="layout">
				<StyledTabList role="tablist" aria-label="Job tabs">
					{jobsData.map((job, i) => (
						<StyledTabButton
						key={i}
						$isActive={activeTabId === i}
						onClick={() => setActiveTabId(i)}
						ref={(el) => {(tabs.current[i] = el)}}
						id={`tab-${i}`}
						role="tab"
						tabIndex={activeTabId === i ? 0 : -1}
						aria-selected={activeTabId === i}
						aria-controls={`panel-${i}`}
						>
						<span>{job.folder}</span>
						</StyledTabButton>
					))}
					<StyledHighlight $activeTabId={activeTabId} />
				</StyledTabList>

				<StyledTabPanels $height={tabHeight}>
					{jobsData.map((job, i) => (
						<CSSTransition
						key={i}
						in={activeTabId === i}
						timeout={250}
						classNames="fade"
						unmountOnExit
						>
							<StyledTabPanel
  								ref={(el) => {(panelsRef.current[i] = el)}}
								id={`panel-${i}`}
								role="tabpanel"
								tabIndex={activeTabId === i ? 0 : -1}
								aria-labelledby={`tab-${i}`}
								aria-hidden={activeTabId !== i}
								hidden={activeTabId !== i}
							>
								<h3>
									<span>{job.title}</span>
									<span className="company">
										&nbsp;@&nbsp;
										<a
										href={job.url}
										className="inline-link"
										target="_blank"
										rel="noopener noreferrer"
										>
											{job.company}
										</a>
									</span>
								</h3>

								<p className="dates">{job.dates}</p>

								<ul>
									{job.bullets.map((bullet, idx) => (
										<li key={idx}>{bullet}</li>
									))}
								</ul>
							</StyledTabPanel>
						</CSSTransition>
					))}
				</StyledTabPanels>
			</div>
		</StyledExperienceSection>
	);
};

export default Experience;
