import React, { ReactElement } from 'react'
import FirstChar from '../../atoms/first-char'
import OtherChars from '../../atoms/other-chars'
import StyledHeroElement from './hero-element.styles'

interface Props {
    content: string
}

export default function HeroElement({content}: Props): ReactElement {
    const firstChar = content.slice(0,1)
    const otherChars = content.slice(1)
    return (
        <StyledHeroElement>
            <FirstChar content={firstChar}/>
            <OtherChars content={otherChars} />
        </StyledHeroElement>
    )
}
