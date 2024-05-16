import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Bio } from '../../data/data'
import Typewriter from 'typewriter-effect'
import hero from '../../Images/hero.svg'

const HeroWrapper = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.card_light};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 1.8rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
    
    @media screen and (max-width: 960px){
        padding: 4.1rem 1rem;
    }

    @media screen and (max-width: 640px){
        padding: 2rem 1rem;
    }
`

const HeroContentContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`

const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    order: 1;
    gap: 1rem;

    @media screen and (max-width: 960px){
        width: 100%;
        order: 2;
        margin-bottom: 2rem;
        align-items: center;
    }
`

const RightContainer = styled.div`
    width: 50%;
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 960px){
        width: 100%;
        order: 1;
        margin-bottom: 5rem;
    }

    @media screen and (max-width: 640px){
        margin-bottom: 2rem;
    }
`

const Title = styled.h1`
    font-size: 3.125rem;
    font-weight: 700;
    color: ${({theme}) => theme.text_primary};

    @media screen and (max-width: 960px){
        text-align: center;
    }

    @media screen and (max-width: 640px){
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }
`

const Textloop = styled.div`
    display: flex;
    font-weight: 600;
    color: ${({theme}) => theme.text_primary};
    gap: 12px;
    font-size: 2rem;

    @media screen and (max-width: 960px){
        justify-content: center;
    }

    @media screen and (max-width: 640px){
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 490px){
        flex-direction: column;
        gap: 0;
        align-items: center;
    }
`

const Span = styled.span`
    color: ${({theme}) => theme.primary};
`

const Description = styled.p`
    font-size: 1.25rem;
    margin-bottom: 2.6rem;
    color: ${({theme}) => theme.text_primary + 95};

    @media screen and (max-width: 960px){
        text-align: center;
    }

    @media screen and (max-width: 640px){
        font-size: 1rem;
    }
`

const CheckResumeButton = styled.a`
    text-decoration: none;
    width: 100%;
    max-width: 300px;
    text-align: center;
    padding: 1rem 0;
    font-size: 1.25rem;
    color: ${({theme}) => theme.white};
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;

    &:hover{
        transform: scale(1.05);
        filter: brightness(1);
        box-shadow: 20px 20px 60px #1F2634;
    }

    @media screen and (max-width: 640px){
        font-size: 1rem;
        padding: 0.8rem 0;
        width: 200px;
    }
`

const imageAnimation = keyframes`
    0%{
        transform: translateY(-15px);
    }
    100%{
        transform: translateY(15px);
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
    object-position: center;
    animation: ${imageAnimation} 1.4s infinite alternate-reverse ease-in-out;

    @media screen and (max-width: 640px){
        max-width: 280px;
        max-width: 280px;
    }
`

const HeroSection = () => {
    return (
        <HeroWrapper id="about">
            <HeroContentContainer>
                <LeftContainer>
                    <Title>Hi, I am<br/>{Bio.name}</Title>
                    <Textloop>
                        I am a
                        <Span>
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Span>
                    </Textloop>
                    <Description>{Bio.description}</Description>
                    <CheckResumeButton href={Bio.resume} target="_blank">Check Resume</CheckResumeButton>
                </LeftContainer>
                <RightContainer>
                    <Image src={hero} alt="hero image" />
                </RightContainer>
            </HeroContentContainer>
        </HeroWrapper>
    )
}

export default HeroSection