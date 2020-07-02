import React, { useState, ReactElement } from 'react'
import Bubble from '../../atoms/bubble'
interface Props {
    
}

export default function Bubbles({}: Props): ReactElement {
    const [positions, setPositions] = useState([
        // zmienić z 'px' na 'em' albo %
        {
            top: '194px',
            left: '94px'
        },
        {
            top: '81px',
            left: '229px'
        },
        {
            top: '386px',
            left: '241px'
        },
    ])
    return (
        <div>
            :)
        </div>
    )
}
