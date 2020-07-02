import React, { ReactElement } from 'react'
import StyledOtherChars from './other-chars.styles'

interface Props {
    content: string
}

export default function OtherChars({content}: Props): ReactElement {
    return (
        <StyledOtherChars>
            {content}
        </StyledOtherChars>
    )
}
