import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
    box-sizing: border-box;
    }

    body {
        align-items: center;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .list-group{
        
    }

    .list-group-item{
        background: ${({theme}) => theme.cardBg} !important;
        color: ${({theme}) => theme.text}
    }
  
`