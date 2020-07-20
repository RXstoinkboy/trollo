import styled, {css} from 'styled-components'
import {Props} from './bubble'

const StyledBubble = styled.div<Props>`
    position: absolute;
    top: ${p => !p.content ? p.top + '%' : 'auto'};
    left: ${p => !p.content ? p.left + '%' : 'auto'};
    bottom: ${p => p.content && 0};
    right: ${p => p.content && 0};
    width: ${p => p.diagonal}vh;
    height: ${p => p.diagonal}vh;
    filter: drop-shadow(-6px 5px 14px #00000077);
    transform: translate(${p => p.content && '50%, 50%'});
    border-radius: 50%;
    cursor: ${p => p.content && 'pointer'};

    background: ${p => p.color};
    
    &::after {
        content: '${p => p.content}';
        font-size: ${p => p.theme.typography.fontSize.m};
        font-weight: ${p => p.theme.typography.fontWeight.black};
        position: absolute;
        top: 50%;
        left: 50%;
        height: auto;
        width: auto;
        transform: rotate(-48deg) translateY(-140px);
    }
`
 
export default StyledBubble;