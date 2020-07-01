import React, { ReactElement } from 'react'
import HeroElement from '../../molecules/hero-element'
import StyledHero from './hero.styles'

interface Props {
    heroData: string[] 
}

export default function Hero({heroData}: Props): ReactElement {
    return (
        <StyledHero>
            {heroData.map((content, index) => <HeroElement key={index} content={content}/>)}
        </StyledHero>
    )
}
