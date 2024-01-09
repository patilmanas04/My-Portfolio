import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import TypewriterComponent from "typewriter-effect";

const HeroContainer = styled.div`
    background-color: ${({theme}) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

    @media screen and (max-width: 960px){
        padding: 66px 16px;
    }

    @media screen and (max-width: 640px){
        padding: 32px 16px;
    }
`

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);

    @media screen and (max-width: 960px){
        padding: 0 0px;
        justify-content: center;
    }
`

const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`

const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;

    @media screen and (max-width: 960px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media screen and (max-width: 640px0px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: center;
    gap: 12px;

    @media screen and (max-width:960px){
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }

    @media screen and (max-width: 640px){
        order: 1;
        margin-bottom: 30px;
    }
`

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};

    @media screen and (max-width: 960px){
        text-align: center;
    }

    @media screen and (max-width: 640px){
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;        
    }
`

const TextLoop = styled.div`
    font-style: 32px; 
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68;
    gap: 12px;
    display: flex;

    @media screen and (max-width: 960px){
       text-align: center;
    }

    @media screen and (max-width: 640px){
        font-style: 22px;
        line-height: 48;
        margin-bottom: 16px; 
    }
`

const HeroSection = ()=>{
    return (
        <>
        <div id="about">
            <HeroContainer>
                <HeroBg>

                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am<br/>{Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <span>
                                <TypewriterComponent 
                                    options={{
                                        strings: Bio.roles,
                                        autostart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <GithubProfileButton href={Bio.github} target="_blank">My Github Profile</GithubProfileButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
        </>
    )
}

export default HeroSection