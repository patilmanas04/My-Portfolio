import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({theme}) => theme.card};
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    &:hover{
        transform: translateY(-10px);
        box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.6);
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme}) => theme.white};
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.primary};
    background-color: ${({theme}) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    white-space: nowrap;
    max-width: 100%;
    height: auto;
`

const Description = styled.div`
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary + 99};
    overflow: hidden;
    display: -webkit-box;
    margin-top: 8px;
    max-width: 100%;
`

const ActionButtons = styled.div`
    width: 100%;
    display: flex;
    gap: 0.6rem;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
`

const AnchorButton = styled.a`
    text-decoration: none; 
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
`

const ProjectCard = (props) => {
    const {project} = props

    const iconStyles = {
        color: "#854CE6 ",
    }

    return (
        <>
        <Card>
            <Image src={project.image}/>
            <Tags>
                {
                    project.tags.map((tag) => {
                        return <Tag key={tag}>{tag}</Tag>
                    })
                }
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
            </Details>
            <ActionButtons>
                {
                    project.github &&
                    <AnchorButton href={project.github} target='_blank'>
                        <FaGithub style={iconStyles}/>
                    </AnchorButton>
                }
                {
                    project.webapp &&
                    <AnchorButton href={project.webapp} target='_blank'>
                        <IoGlobeOutline style={iconStyles}/>
                    </AnchorButton>
                }
            </ActionButtons>
        </Card>
        </>
    )
}

export default ProjectCard