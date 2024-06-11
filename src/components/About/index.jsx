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
    color: ${props => props.theme.AboutTitle};
`

const AboutDescription = styled.p`
    color: ${props => props.theme.text};
    font-weight: 300;
    line-height: 1.5;
    width: 100%;
    max-width: 800px;
`

const AboutSection = () => {
    return (
        <AboutWrapper>
            <AboutTitle>
                //about
            </AboutTitle>
            <AboutDescription>
                {About.description1}
            </AboutDescription>
        </AboutWrapper>
    )
}

export default AboutSection