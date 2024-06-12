import React from 'react'
import styled from 'styled-components'
import { Links } from '../../data/constants'

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
`

const LinksTitle = styled.p`
    color: ${props => props.theme.commentText};
    font-size: 1.1rem;
`

const LinksList = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const LinkItem = styled.a`
    color: ${props => props.theme.text};
    text-decoration: none;
    font-size: 2.5rem;
    position: relative;

    &::before{
        content: '';
        border-left: 15px solid ${props => props.theme.green};
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        position: absolute;
        right: -25px;        
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
    }

    &:hover::before {
        opacity: 1;
    }
`

const LinksSection = () => {
    return (
        <LinksWrapper>
            <LinksTitle>
                //links
            </LinksTitle>
            <LinksList>
                {
                    Links.map((link, index) => {
                        return <LinkItem href={link.url} target="_blank" key={index}>{link.name}</LinkItem>
                    })
                }
            </LinksList>
        </LinksWrapper>
    )
}

export default LinksSection