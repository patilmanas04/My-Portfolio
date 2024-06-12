import React from 'react'
import styled from 'styled-components'

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.horizontalDivider};
    margin: 30px 0;
`

const HorizontalDivider = () => {
    return (
        <Divider></Divider>
    )
}

export default HorizontalDivider