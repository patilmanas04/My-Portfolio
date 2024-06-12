import React from 'react'
import styled, { keyframes } from 'styled-components'

const progress = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`

const MessageSentModuleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 300px;
    border-radius: 10px;
    gap: 7px;
`

const MessageSentModuleTitle = styled.p`
    color: ${props => props.theme.text};
    font-size: 1.2rem;
`

const MessageSentModuleDescription = styled.p`
    color: ${props => props.theme.text};
    font-size: 1rem;
    text-align: center;
`

const MessageSentModule = (props) => {
    const { open, success } = props

    const MessageSentModuleWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        border: 1px solid ${props => props.theme.border};
        background: ${props => props.theme.background};
        border-radius: 10px;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 2px;
            background: ${(success)?props => props.theme.green:props => props.theme.red};
            animation: ${progress} 3s linear;
        }
    `

    return (
        <MessageSentModuleWrapper style={{
            display: open ? 'flex' : 'none'
        }}>
            <MessageSentModuleContent>
                <MessageSentModuleTitle>
                    Message {(success)?'Sent':'not Sent'}!
                </MessageSentModuleTitle>
                <MessageSentModuleDescription>
                    {(success)?'I will get back to you as soon as possible.':'Please try again later.'}
                </MessageSentModuleDescription>
            </MessageSentModuleContent>
        </MessageSentModuleWrapper>
    )
}

export default MessageSentModule