import React, { ReactElement } from "react";
import StyledBubble from './bubble.styles'
import { ThemeProvider } from "styled-components";
import {Link, useRouteMatch} from 'react-router-dom'

export interface Props {
    diagonal: number
    top: number
    left: number
    color: string
    content?: string
}

export default function Bubble(props: Props): ReactElement {
  const {url} = useRouteMatch();
  return (
    <>
    {props.content && <Link to={`${url}/login`}><StyledBubble {...props} /></Link>}
    {!props.content && <StyledBubble {...props} />}
    </>
  );
}
