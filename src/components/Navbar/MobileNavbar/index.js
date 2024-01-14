import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../../data/constants'

const MobileMenu = styled.div`
    width: 100vw;
    height: 100vh;
    display: none;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999 !important;
    box-shadow: 0 29px 80px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    @media screen and (max-width: 769px){
        display: block;
    }
`

const MobileMenuContainer = styled.div`
    width: 60vw;
    height: 100vh;
    background-color: #342864;
    padding: 2rem;
`

const Logo = styled.img`
    margin-bottom: 3rem;
`

const NavItemList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
`

const NavItem = styled.li`
    margin: 0.5rem;
`

const NavLink = styled.a`
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    color: #ffffff;
    position: relative;
    cursor: pointer;

    &::before{
        content: "";
        width: 2rem;
        height: 0.2rem;
        background: linear-gradient(90deg, #a993fe 0%, #7e61e7 0%);
        border-radius: 0.5rem;
        position: absolute;
        bottom: -0.6rem;
        opacity: 0;
        transform: translateX(-1.5rem);
        transition: all 0.3s ease;
    }

    &:hover::before{
        width: 100%;
        transform: translateX(0);
        opacity: 1;
    }
`

const GithubProfileButton = styled.a`
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background: linear-gradient(90deg, #a993fe 0%, #7e61e7 0%);
    padding: 0.6rem 2rem;
    border: none;
    outline: 1.5px solid transparent;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        color: #a993fe;
        background: #000;
        outline: 1.5px solid #a993fe;
    }
`

const MobileNavbar = ({isOpen, toggleMenu}) => {
    return (
        <>
        {
            isOpen &&
            <MobileMenu onClick={toggleMenu}>
                <MobileMenuContainer>
                    <Logo alt="logo"/>

                    <NavItemList>
                        <NavItem>
                            <NavLink href="#about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#skills">Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#experience">Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#projects">Projects</NavLink>
                        </NavItem>

                        <GithubProfileButton href={Bio.github}>Github Profile</GithubProfileButton>
                    </NavItemList>
                </MobileMenuContainer>
            </MobileMenu>
        }
        </>
    )
}

export default MobileNavbar