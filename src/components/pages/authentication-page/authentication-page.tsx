import React, { ReactElement, useState } from 'react'
import AuthenticationTemplate from '../../templates/authentication-template'

export default function AuthenticationPage(): ReactElement {
    const [heroData] = useState(['Savings', 'Kept', '$imple'])

    return (
        <AuthenticationTemplate heroData={heroData}/>
    )
}
