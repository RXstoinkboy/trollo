import React, { ReactElement } from 'react'
import StyledRoundButton from './round-button.styles'

// interface Props {
//     type: "submit"
// }

export default function RoundButton<HTMLButtonElement>({type}: any): ReactElement {
    return (
        <StyledRoundButton type={type}/>
    )
}
