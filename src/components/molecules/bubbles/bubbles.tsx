import React, { useState, useContext, ReactElement } from 'react'
import Bubble from '../../atoms/bubble'
import {ThemeContext} from 'styled-components'

interface Props {
    
}

export default function Bubbles({}: Props): ReactElement {
    const theme = useContext(ThemeContext)

    const [settings, setSettings] = useState([
        {
            top: 6,
            left: 55,
            diagonal: 18,
            color: theme.colors.main
        },
        {
            top: 49,
            left: 60,
            diagonal: 13,
            color: theme.colors.secondary
        },
        {
            top: 26,
            left: 24,
            diagonal: 10,
            color: theme.colors.thirdary
        },
        {
            top: 550,
            left: 229,
            diagonal: 40,
            color: theme.colors.main,
            content: 'start'
        },
    ])

    return (
        <div>
            {settings.map((bubble, index) => <Bubble key={index} diagonal={bubble.diagonal} color={bubble.color} top={bubble.top} left={bubble.left} content={bubble.content}/>)}
        </div>
    )
}
