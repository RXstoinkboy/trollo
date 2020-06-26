import React, { ReactElement } from 'react'
import StyledTitle from './title.styles'

interface Props {
    title: string
}

export default function Title({title}: Props): ReactElement {
    return (
        <StyledTitle>title</StyledTitle>
    )
}
