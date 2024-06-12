import './App.css'
import { darkTheme, lightTheme } from './utils/theme.js'
import styled, { ThemeProvider } from 'styled-components'
import NavbarSection from './components/Navbar/index.jsx'
import IntroductionSection from './components/Introduction/index.jsx'
import AboutSection from './components/About/index.jsx'
import SkillsSection from './components/Skills/index.jsx'
import ExperienceSection from './components/Experience/index.jsx'
import ProjectSection from './components/Projects/index.jsx'
import LinksAndContactSection from './components/LinksAndContact/index.jsx'
import FooterSection from './components/Footer/index.jsx'
import HorizontalDivider from './components/HorizontalDivider/index.jsx'
import { useState } from 'react'
import MessageSentModule from './components/Cards/MessageSentModule.jsx'

const BodyWrapper = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.text};
	width: 100%;
	height: 100%;
	padding: 40px;
	overflow-x: hidden;

	@media (max-width: 768px) {
		padding: 20px;
	}
`

function App() {
	const [theme, setTheme] = useState('dark')
	const [open, setOpen] = useState(false)
	const [success, setSuccess] = useState(false)

	const toggleTheme = () => {
		setTheme((theme=='dark')?'light':'dark')
	}

	const openModule = (success) => {
		setSuccess(success)
		setOpen(true)
		
		setTimeout(() => {
			setOpen(false)
		}, 3000)
	}

	return (
		<ThemeProvider theme={(theme=='dark')?darkTheme:lightTheme}>
			<BodyWrapper>
				<MessageSentModule open={open} success={success}/>
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
				<LinksAndContactSection openModule={openModule}/>
				<HorizontalDivider />
				<FooterSection />
			</BodyWrapper>
		</ThemeProvider>	
	)
}

export default App