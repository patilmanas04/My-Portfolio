import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 0 0;
    width: 100%;
`

const FooterText = styled.p`
    color: ${props => props.theme.commentText};
    font-size: 1rem;
    text-align: center;
`

const FooterSection = () => {
    return (
        <FooterWrapper>
            <FooterText>
                &copy; 2024 by Manas Patil. All rights reserved. | Developed by me with ❤️
            </FooterText>
        </FooterWrapper>
    )
}

export default FooterSection