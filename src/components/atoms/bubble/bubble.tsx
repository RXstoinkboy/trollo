import React, { ReactElement } from "react";
import StyledBubble from './bubble.styles'
import { ThemeProvider } from "styled-components";

export interface Props {
    diagonal: number
    top: number
    left: number
    color: string
    content?: string
}

export default function Bubble(props: Props): ReactElement {
  return (
    <StyledBubble {...props} />
  );
}
