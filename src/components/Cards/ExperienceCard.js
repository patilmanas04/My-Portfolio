import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

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

    &:hover{
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }

    &:hover ${Document} {
        display: flex;
    }

    @media screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 0.1px solid #306ee8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
`

const Logo = styled.img`
    width: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;

    @media screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary + 99};

    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.text_secondary + 80};

    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary + 80};

    @media screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary + 99};
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: 10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary + 99};

    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`

const ExperienceCard = (props) => {
    const {experience} = props

    return (
        <>
        <Card>
            <Top>
                <Logo src={experience.img}/>
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Duration>{experience.date}</Duration>
                </Body>
            </Top>
            <Description>
                {experience.desc}
                {
                    experience?.skills && (
                        <>
                        <br/>
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {
                                    experience.skills.map((skill,index)=>{
                                        return <Skill>{skill} {index !== experience.skills.length-1 && (<>|</>)}</Skill>
                                    })
                                }
                            </ItemWrapper>
                        </Skills>
                        </>
                    )
                }
            </Description>
            {
                experience.doc && <a href={experience.doc} target='new'>
                    <Document src={experience.doc}/>
                </a>
            }
        </Card>
        </>
    )
}

export default ExperienceCard