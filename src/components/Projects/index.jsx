import React from 'react'
import styled from 'styled-components'
import { Projects } from '../../data/constants'
import ProjectCard from '../Cards/ProjectCard'

const ProjectsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`

const ProjectsTitle = styled.p`
    color: ${props => props.theme.commentText};
    font-size: 1.1rem;
`

const CodeText = styled.p`
    color: ${props => props.theme.commentText};
`

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const Span = styled.span`
    color: ${props => props.theme.green};
`

const ProjectsSection = () => {
    return (
        <ProjectsWrapper>
            <ProjectsTitle>
                //projects
            </ProjectsTitle>
            <CodeText>
                const <Span>Projects</Span> {"= {"}
            </CodeText>
            <ProjectsContainer>
                {
                    Projects.map((project, index) => {
                        return (
                            <ProjectCard project={project} key={index}/>
                        )
                    })
                }
            </ProjectsContainer>
            <CodeText>
                {"}"}
            </CodeText>
        </ProjectsWrapper>
    )
}

export default ProjectsSection