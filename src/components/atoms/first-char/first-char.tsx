import React, { ReactElement } from 'react'
import StyledFirstChar from './first-char.styles'

interface Props {
    content: string
}

export default function FirstChar({content}: Props): ReactElement {
    return (
        <StyledFirstChar>
            {content}
        </StyledFirstChar>
    )
}
