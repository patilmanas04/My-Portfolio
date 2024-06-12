import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: self-start;
    padding: 14px 0 0 0;
    width: 100%;
    gap: 10px;
`

const FooterText = styled.p`
    color: ${props => props.theme.commentText};
    font-size: 1rem;
    text-align: left;
`

const CodeText = styled.p`
    color: ${props => props.theme.commentText};
    font-size: 1rem;
    text-align: left;
`

const FooterSection = () => {
    return (
        <FooterWrapper>
            <FooterText>
                //&copy; 2024 by Manas Patil. All rights reserved. | Developed by me with ❤️
            </FooterText>
            <CodeText>
                bye()
            </CodeText>
        </FooterWrapper>
    )
}

export default FooterSection