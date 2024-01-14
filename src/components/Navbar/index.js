import React, { useState } from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import { FaBars } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx";
import MobileNavbar from './MobileNavbar'

const NavWrapper = styled.nav`
    background: ${({theme}) => theme.card_light};
    padding: 0.5rem 0;
    position: sticky;
    top: 0;
    z-index: 30;
    backdrop-filter: blur(50px);

    @media screen and (max-width: 1325px){
        padding: 0 2rem;
    }
`

const NavContent = styled.div`
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    margin: 0 auto;
`

const Logo = styled.a`
    width: 12rem;
    height: auto;

    @media screen and (max-width: 425px){
        width: 10rem;
        height: auto;
    }
`

const NavItemList = styled.ul`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;

    @media screen and (max-width: 769px){
        display: none;
    }
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

const MobileMenuButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.4rem;
    color: #fff;
    background: linear-gradient(90deg, #a993fe -0.13%, #7e61e7 99.87%);
    line-height: 0;
    cursor: pointer;
    transition: all 0.4s ease;
    display: none;

    &:hover{
        color: #a993fe;
        background: #000;
        border: 1px solid #a993fe;
    }

    @media screen and (max-width: 769px){
        display: block;
    }
`

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
        <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>

        <NavWrapper>
            <NavContent>
                <Logo src="" alt="logo"/>

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

                    <GithubProfileButton href={Bio.github} target="_blank">Github Profile</GithubProfileButton>
                </NavItemList>

                <MobileMenuButton onClick={toggleMenu}>
                    {openMenu?<RxCross2 />:<FaBars />}
                </MobileMenuButton>
            </NavContent>
        </NavWrapper>
        </>
    )
}

export default Navbar