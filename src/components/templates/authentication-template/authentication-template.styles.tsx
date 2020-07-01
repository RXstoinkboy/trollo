import styled from 'styled-components'

const StyledAuthenticationTemplate = styled.section`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.main.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default StyledAuthenticationTemplate;