import React, { ReactElement } from 'react'
import StyledAuthenticationTemplate from './authentication-template.styles'
import Title from '../../atoms/title'
import LoginForm from '../../organisms/login-form'

interface Props {
    title: string
}

export default function AuthenticationTemplate({title}: Props): ReactElement {
    return (
        <StyledAuthenticationTemplate>
            <Title title={title}/>
            <LoginForm />
        </StyledAuthenticationTemplate>
    )
}
