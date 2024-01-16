import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: fit-content;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    &:hover{
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }

    &::before{
        content: "";
        width: 10px;
        height: 10px;
        background: #2E1D4A;
        border-left: 0.1px solid #306ee8;
        border-top: 0.1px solid #306ee8;
        position: absolute;
        z-index: 999;
        left: 134px;
        top: 27px;
        transform: rotate(-45deg);
    }

    @media screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: fit-content;
    }

    border: 0.1px solid #306ee8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const NoExperienceText = styled.div`
    font-size: 2rem;
    font-family: 'Handlee', cursive;
    color: #ffffff;
`

const NoExperienceCard = () => {
    return (
        <>
        <Card>
            <NoExperienceText>No Experience</NoExperienceText>
        </Card>
        </>
    )
}

export default NoExperienceCard