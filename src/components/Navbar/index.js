import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di"
import { FaBars } from "react-icons/fa"

const Nav = styled.nav`
    background: ${({theme}) => theme.card_light};
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    @media screen and (max-width: 640px){
        padding: 0 0;
    }
`

const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 850px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({theme}) => theme.text_primary};
    }
`

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    
    @media screen and (max-width: 850px){
        display: none;
    }
`

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary};
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 80%;
    height: 100%;
    padding: 0 6px;

    @media screen and (max-width: 850px){
        display: none;
    }
`

const GithubButton = styled.button`
    background: transparent;
    color: ${({theme}) => theme.primary};
    border: 1.8px solid ${({theme}) => theme.primary};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    &:hover{
        background-color: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.white};
    }

    @media screen and (max-width: 640px){
        font-size: 0.8rem;
    }
`

const Span = styled.span`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 20px;
    background: ${({theme}) => theme.card_light+99};
    transition: all 0.3s ease-in-out;
    transform: ${({isOpen}) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    opacity: ${({isOpen}) => (isOpen ? "1" : "0")};
    z-index: ${({isOpen}) => isOpen ? "1" : "-1"};
`

const MobileMenuLink = styled(LinkR)`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary};
    }
`

const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const theme = useTheme()

    const setIsOpenValue = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        cursor: "pointer",
                    }}>
                        <DiCssdeck size="3rem" /><Span>Portfolio</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={setIsOpenValue}/>
                </MobileIcon>

                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </NavItems>

                <ButtonContainer>
                    <GithubButton>Github Profile</GithubButton>
                </ButtonContainer>
            </NavContainer>
            {
                isOpen && (
                    <MobileMenu>
                        <MobileMenuLink
                            href="#about"
                            onClick={setIsOpenValue}
                        >
                            About
                        </MobileMenuLink>
                        <MobileMenuLink
                            href="#skills"
                            onClick={setIsOpenValue}
                        >
                            Skills
                        </MobileMenuLink>
                        <MobileMenuLink
                            href="#experience"
                            onClick={setIsOpenValue}
                        >
                            Experience
                        </MobileMenuLink>
                        <MobileMenuLink
                            href="#projects"
                            onClick={setIsOpenValue}
                        >
                            Projects
                        </MobileMenuLink>
                        <MobileMenuLink
                            href="#education"
                            onClick={setIsOpenValue}
                        >
                            Education
                        </MobileMenuLink>
                        <GithubButton 
                            style={{
                                padding: "10px 16px",
                                background: `${theme.primary}`,
                                color: "white",
                                width: "max-content",
                            }}
                            href="/"
                            target="_blank"
                        >
                            Github Profile
                        </GithubButton>
                    </MobileMenu>
                )
            }          
        </Nav>
        </>
    )
} 

export default Navbar