import React, { ReactElement } from 'react'

interface Props {
    content: string
}

export default function FirstChar({content}: Props): ReactElement {
    return (
        <div>
            {content}
        </div>
    )
}
