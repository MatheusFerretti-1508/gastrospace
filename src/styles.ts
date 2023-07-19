import {createGlobalStyle} from 'styled-components'

export const cores ={
    corDoTexto: '#E66767'
}

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }

    body {
        background-color: #FFF8F2
    }
`