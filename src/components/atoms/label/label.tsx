import React, { ReactElement } from 'react'
import StyledLabel from './label.styles'

interface Props {
    label: string
}

export default function label({label}: Props): ReactElement {
    return (
        <StyledLabel>{label}</StyledLabel>
    )
}
