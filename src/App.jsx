import './App.css'
import { darkTheme, lightTheme } from './utils/theme.js'
import styled, { ThemeProvider } from 'styled-components'
import NavbarSection from './components/Navbar/index.jsx'
import IntroductionSection from './components/Introduction/index.jsx'
import AboutSection from './components/About/index.jsx'
import SkillsSection from './components/Skills/index.jsx'
import ExperienceSection from './components/Experience/index.jsx'
import ProjectSection from './components/Projects/index.jsx'
import LinksSection from './components/Links/index.jsx'
import ContactSection from './components/Contact/index.jsx'
import FooterSection from './components/Footer/index.jsx'
import HorizontalDivider from './components/HorizontalDivider/index.jsx'
import { useState } from 'react'

const BodyWrapper = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.text};
	width: 100%;
	height: 100%;
	padding: 40px;
`

function App() {
	const [theme, setTheme] = useState('dark')
	const toggleTheme = () => {
		setTheme((theme=='dark')?'light':'dark')
	}

	return (
		<ThemeProvider theme={(theme=='dark')?darkTheme:lightTheme}>
			<BodyWrapper>
				<NavbarSection toggleTheme={toggleTheme} theme={theme}/>
				<HorizontalDivider />
				<IntroductionSection />
				<HorizontalDivider />
				<AboutSection />
				<HorizontalDivider />
				<SkillsSection theme={theme}/>
				<HorizontalDivider />
				<ExperienceSection />
				<HorizontalDivider />
				<ProjectSection />
				<HorizontalDivider />
				<LinksSection />
				<HorizontalDivider />
				<ContactSection />
				<HorizontalDivider />
				<FooterSection />
			</BodyWrapper>
		</ThemeProvider>	
	)
}

export default App