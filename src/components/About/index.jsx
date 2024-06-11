import React from 'react'
import styled from 'styled-components'
import { About } from '../../data/constants'

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 10px;
`

const AboutTitle = styled.p`
    color: ${props => props.theme.commentText};
`

const AboutDescription = styled.p`
    color: ${props => props.theme.text};
    font-weight: 300;
    line-height: 1.5;
    width: 100%;
    max-width: 800px;

    @media (max-width: 800px) {
        text-align: justify;
    }
`

const AboutSection = () => {
    return (
        <AboutWrapper>
            <AboutTitle>
                //about
            </AboutTitle>
            <AboutDescription>
                {About.description}
            </AboutDescription>
        </AboutWrapper>
    )
}

export default AboutSection