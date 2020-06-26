import React, { ReactElement } from 'react'
import StyledInput from './input.styles'

interface Props {
    type: string
}

export default function input({type}: Props): ReactElement {
    return (
        <StyledInput type={type}/>
    )
}
