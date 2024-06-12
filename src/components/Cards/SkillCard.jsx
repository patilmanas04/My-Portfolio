import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    aspect-ratio: 1/1;
    width: 150px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.border};

    &:hover{
        background-color: ${props => props.theme.hover};
    }
`

const Logo = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    img{
        width: 100%;
        height: 100%;
    }
`

const Name = styled.p`
    color: ${props => props.theme.text};
    font-size: 12px;
    text-align: center;
`

const SkillCard = (props) => {
    return (
        <Card>
            <Logo>
                <img src={props.skill.logo} alt="logo" />
            </Logo>
            <Name>
                {props.skill.name}
            </Name>
        </Card>
    )
}

export default SkillCard