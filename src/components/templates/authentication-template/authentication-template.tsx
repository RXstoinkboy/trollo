import React, { ReactElement } from 'react'
import StyledAuthenticationTemplate from './authentication-template.styles'
// import Title from '../../atoms/title'
import LoginForm from '../../organisms/login-form'
// import SignUpForm from '../../organisms/sign-up-form'
// import Bubbles from '../../organisms/bubbles'
import Hero from '../../organisms/hero'

interface Props {
    heroData: string[]
}

export default function AuthenticationTemplate({heroData}: Props): ReactElement {
    return (
        <StyledAuthenticationTemplate>
            <Hero heroData={heroData}/>
            {/* <Bubbles /> */}
            {/* <LoginForm /> */}
            {/* <SignUpForm /> */}

            {/* <Title title={title}/> */}
        </StyledAuthenticationTemplate>
    )
}
