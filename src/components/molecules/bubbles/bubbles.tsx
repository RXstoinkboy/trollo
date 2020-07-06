import React, { useState, useContext, ReactElement } from 'react'
import Bubble from '../../atoms/bubble'
import {ThemeContext} from 'styled-components'

interface Props {
    
}

export default function Bubbles({}: Props): ReactElement {
    const theme = useContext(ThemeContext)

    const [settings, setSettings] = useState([
        // zmienić z 'px' na 'em' albo %
        {
            top: 194,
            left: 94,
            diagonal: 60,
            color: theme.colors.main
        },
        {
            top: 81,
            left: 229,
            diagonal: 120,
            color: theme.colors.secondary
        },
        {
            top: 386,
            left: 241,
            diagonal: 74,
            color: theme.colors.thirdary
        },
        {
            top: 550,
            left: 229,
            diagonal: 348,
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
