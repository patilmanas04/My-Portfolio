import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInOutAnimation = keyframes`
    0% {
        opacity: 0.3;
    }
    100% {
        opacity: 1;
    }
`

const NavbarWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px){
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
`    

const LeftContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
`

const RightContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    @media (max-width: 500px){
        align-items: flex-start;
    }
`

const CommentText = styled.p`
    color: ${props => props.theme.commentText};
    width: fit-content;
`

const PrimaryText = styled.a`
    text-decoration: none;
    color: ${props => props.theme.text};
    transition: background-color 100ms ease-in-out;
    width: fit-content;
    animation: ${fadeInOutAnimation} 1.4s ease-in-out infinite alternate-reverse;

    &:hover{
        background-color: ${props => props.theme.hover};
    }
`

const ThemeText = styled.p`
    color: ${props => props.theme.text};
`

const ThemeToggleButton = styled.span`
    color: ${props => props.theme.text};
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    animation: ${fadeInOutAnimation} 1.4s ease-in-out infinite alternate-reverse;

    &:hover{
        background-color: ${props => props.theme.hover};
    }
`

const NavbarSection = (props) => {
    const {toggleTheme, theme} = props

    return (
        <NavbarWrapper>
            <LeftContainer>
                <CommentText>
                    //portfolio
                </CommentText>
                <PrimaryText href='https://patilmanas.netlify.app'>
                    .manaspatil
                </PrimaryText>
            </LeftContainer>
            <RightContainer>
                <CommentText>
                    //theme
                </CommentText>
                <ThemeText>
                    theme = THEMES.<ThemeToggleButton onClick={toggleTheme}>{theme}</ThemeToggleButton>
                </ThemeText>
            </RightContainer>
        </NavbarWrapper>
    )
}

export default NavbarSection