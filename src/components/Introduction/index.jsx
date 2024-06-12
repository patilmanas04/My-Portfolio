import React from 'react'
import styled from 'styled-components'
import { Introduction } from '../../data/constants'


const IntroductionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 10px;
`

const CodeText = styled.p`
    color: ${props => props.theme.commentText};
`

const IntroductionText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
`

const NameText = styled.h1`
    color: ${props => props.theme.text};
    font-size: 4.5rem;
    font-weight: 400;
    
    @media (max-width: 650px) {
        font-size: 2rem;
    }
`

const RoleText = styled.p`
    color: ${props => props.theme.commentText};
    font-size: 2rem;
    @media (max-width: 650px) {
        font-size: 1.25rem;
    }
`

const Span = styled.span`
    color: ${props => props.theme.green};
`

const IntroductionSection = () => {
    return (
        <IntroductionWrapper>
            <CodeText>
                {"hello()"}
                <br />
                const <Span>Introduction</Span>{" = {"}
            </CodeText>
            <IntroductionText>
                <NameText>
                    {`<${Introduction.name}>`}
                </NameText>
                <RoleText>
                    //{Introduction.role}
                    <br />
                </RoleText>
            </IntroductionText>
            <CodeText>
                {"}"}
            </CodeText>
        </IntroductionWrapper>
    )
}

export default IntroductionSection