import React from 'react'
import styled from 'styled-components'
import { Skills } from '../../data/constants'
import SkillCard from '../Cards/SkillCard'

const SkillsWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`

const SkillsTitle = styled.p`
    color: ${props => props.theme.commentText};
    font-size: 1.1rem;
`

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const CodeText = styled.p`
    color: ${props => props.theme.commentText};
`

const Span = styled.span`
    color: ${props => props.theme.green};
`

const SkillsSection = () => {
    return (
        <SkillsWrapper>
            <SkillsTitle>
                //skills
            </SkillsTitle>
            <CodeText>
                const <Span>Skills</Span> = {"{"}
            </CodeText>
            <SkillsContainer>
                {
                    Skills.map((skill, index) => {
                        return (
                            <SkillCard skill={skill} key={index}/>
                        )
                    })
                }
            </SkillsContainer>
            <CodeText>
                {"}"}
            </CodeText>
        </SkillsWrapper>
    )
}

export default SkillsSection