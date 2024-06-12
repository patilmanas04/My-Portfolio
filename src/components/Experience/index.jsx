import React from 'react'
import styled from 'styled-components'
import { Experiences } from '../../data/constants'
import ExperienceCard from '../Cards/ExperienceCard'

const ExperienceWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 30px;
`

const ExperienceTitle = styled.p`
	color: ${props => props.theme.commentText};
    font-size: 1.1rem;
`

const ExperiencesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 60px;
	margin-bottom: 20px;
`

const ExperienceSection = () => {
    return (
		<ExperienceWrapper>
			<ExperienceTitle>
				//experience
			</ExperienceTitle>
			<ExperiencesContainer>
				{
					Experiences.map((experience, index) => {
						return (
							<ExperienceCard experience={experience} key={index}/>
						)
					})
				}
			</ExperiencesContainer>
		</ExperienceWrapper>
    )
}

export default ExperienceSection