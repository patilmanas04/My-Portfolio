import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Themes.js';
import HeroSection from './components/HeroSection/index.jsx';
import SkillsSection from './components/SkillsSection/index.jsx';
import ExperienceSection from './components/ExperienceSection/index.jsx';
import ProjectsSection from './components/ProjectsSection/index.jsx';
import ContactSection from './components/ContactSection/index.jsx';
import FooterSection from './components/FooterSection/index.jsx';

const Body = styled.div`
	background-color: ${({theme}) => theme.bg};
	width: 100%;
	height: 100%;
`

const Wrapper = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
	width: 100%;
	background: linear-gradient(
		38.73deg,
		rgba(204, 0, 187, 0.15) 0%,
		rgba(201, 32, 184, 0) 50%
	),
	linear-gradient(
		141.27deg,
		rgba(0, 70, 209, 0) 50%,
		rgba(0, 70, 209, 0.15) 100%
	);
`

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Body>
				<HeroSection />
				<Wrapper>
					<SkillsSection />
					<ExperienceSection />
				</Wrapper>
				<ProjectsSection />
				<Wrapper>
					<ContactSection />
				</Wrapper>
				<FooterSection />
			</Body>
		</ThemeProvider>
	);
}

export default App;