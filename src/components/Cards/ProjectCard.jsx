import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const ProjectCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    width: 300px;
    height: 500px;
    border: 1px solid ${props => props.theme.border};
    border-radius: 5px;

    &:hover {
        background: ${props => props.theme.hover};
    }
`

const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`    

const ProjectImageContainer = styled.div`
    width: 100%;
    height: 150px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    padding: 30px 20px 0 20px;
    overflow: hidden;
    background-color: ${props => props.theme.imageBg};
`

const ProjectImage = styled.img`
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    transition: all 0.3s ease-in-out;

    ${ProjectCardWrapper}:hover & {
        filter: grayscale(0%);
        transform: rotate(3deg) scale(1.1);
    }
`

const ProjectName = styled.p`
    width: 100%;
    color: ${props => props.theme.text};
    padding: 8px;
    font-size: 1rem;
    border: 1px solid ${props => props.theme.text};
`

const ProjectDescription = styled.p`
    color: ${props => props.theme.text};
`

const ProjectTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.commentText};
`

const ProjectTag = styled.p`
    color: ${props => props.theme.green};
    font-size: 14px;
`

const ProjectOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`

const ProjectOption = styled.a`
    color: ${props => props.theme.text};
    cursor: pointer;
    text-decoration: none;
`

const ProjectCard = (props) => {
    const { project } = props

    return (
        <ProjectCardWrapper>
            <ProjectContent>
                <ProjectImageContainer>
                    <ProjectImage src={project.image} alt={project.name}/>
                </ProjectImageContainer>
                <ProjectName>
                    {project.title}
                </ProjectName>
                <ProjectDescription>
                    {project.description}
                </ProjectDescription>
                <ProjectTags>
                    {
                        project.tags.map((tag, index) => {
                            return (
                                <>
                                    <ProjectTag key={index}>
                                        {tag}
                                    </ProjectTag>
                                    {index == project.tags.length - 1 ? "" : "/"}
                                </>
                            )
                        })
                    }
                </ProjectTags>
            </ProjectContent>
            <ProjectOptions>
                {(project.github) ? <ProjectOption href={project.github} target="_blank"><GitHubIcon /></ProjectOption> : ""}
                {(project.link) ? <ProjectOption href={project.link} target="_blank"><LanguageIcon /></ProjectOption> : ""}
            </ProjectOptions>
        </ProjectCardWrapper>
    )
}

export default ProjectCard