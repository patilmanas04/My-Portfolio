import React from 'react'
import styled from 'styled-components'
import LinksSection from '../Links/index.jsx'
import ContactSection from '../Contact/index.jsx'

const LinksAndContactWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 970px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 80px;
    }
`

const LinksAndContactSection = (props) => {
    const { openModule } = props

    return (
        <LinksAndContactWrapper>
            <LinksSection />
            <ContactSection openModule={openModule}/>
        </LinksAndContactWrapper>
    )
}

export default LinksAndContactSection