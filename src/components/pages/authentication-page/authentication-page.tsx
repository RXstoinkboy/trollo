import React, { ReactElement, useState } from 'react'
import AuthenticationTemplate from '../../templates/authentication-template'

export default function AuthenticationPage(): ReactElement {
    const [title, setTitle] = useState(`Let's count some cash!`)
    return (
        <AuthenticationTemplate title={title} />
    )
}
