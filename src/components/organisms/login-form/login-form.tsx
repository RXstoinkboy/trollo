import React, { ReactElement } from 'react'
import StyledLoginForm from './login-form.styles'
import FormField from '../../molecules/form-field'
import RoundButton from '../../atoms/round-button'

interface Props {
    
}

export default function LoginForm({}: Props): ReactElement {
    return (
        <StyledLoginForm>
            <FormField type='text' label='Username'/>
            <FormField type='password' label='Password'/>
            <RoundButton type='submit'/>
        </StyledLoginForm>
    )
}
