import React, { ReactElement } from 'react'
import StyledFormField from './form-field.styles'
import Label from '../../atoms/label'
import Input from '../../atoms/input'


interface Props {
    label: string
    type: string
}

export default function FormField({label, type}: Props): ReactElement {
    return (
        <StyledFormField>
            <Label label={label}/>
            <Input type={type}/>
        </StyledFormField>
    )
}
