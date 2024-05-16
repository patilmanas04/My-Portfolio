import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: sticky;
    width: 300px;
    z-index: 999;
    background-color: #323232;
    border-radius: 5px;
    padding: 10px 30px 10px 10px;
    left: 20px;
    bottom: 20px;
`

const SnackbarText = styled.p`
    font-size: 16px;
    color: white;
    color: ${({theme}) => theme.text_secondary};
`

const CustomSnackbar = () => {
    return (
        <Wrapper>
            <SnackbarText>
                Email Sent Successfully!
            </SnackbarText>
        </Wrapper>
    )
}

export default CustomSnackbar