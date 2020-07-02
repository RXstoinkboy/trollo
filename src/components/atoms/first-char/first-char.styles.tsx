import styled from 'styled-components'
 
const StyledFirstChar = styled.div`
    font-size: ${({theme}) => theme.typography.fontSize.xxl};
    font-weight: ${({theme}) => theme.typography.fontWeight.black};
    line-height: 87.3%;
`
 
export default StyledFirstChar;