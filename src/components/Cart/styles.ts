import { styled } from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";
import lixeiraImg from '../../assets/images/lixeira-de-reciclagem 1.png'


export const CartContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 32px 8px 1164px 8px;
    width: 360px;
    height: 100%;
    background-color: ${cores.corDoTexto};
    z-index: 2;
`

export const CartItem = styled.div`
    width: 344px;
    height: 100px;
    padding: 8px;
    margin-bottom: 16px;
    position: relative;
    display: flex;
    background-color: #FFEBD9;
    color: ${cores.corDoTexto};

    h4 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
    }

    img {
        width: 80px;
        height: 80px;
        margin-right: 8px;
        object-fit: cover;
    }

    img:last-child {
        width: 16px;
        height: 16px;
        position: absolute;
        bottom: 8px;
        right: 0px;
        cursor: pointer;
    }
`

// export const BotaoRemover = styled.button`
//         background-image: url(${lixeiraImg});
//         background: url(${lixeiraImg});
//         width: 16px;
//         height: 16px;
//         position: absolute;
//         bottom: 8px;
//         right: 0px;
//         cursor: pointer;
// `

export const CartInfos = styled.div`

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        color: #FFEBD9;
    }

    button {
        width: 100%;
        padding: 4px 94px;
        background-color: #FFEBD9;
        color: ${cores.corDoTexto};
        border: none;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }
`

export const BuyFormContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 32px 8px 1164px 8px;
    width: 360px;
    height: 100%;
    background-color: ${cores.corDoTexto};
    z-index: 2;
    color: #FFEBD9;

    h3 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 16px;
    }
`

export const FormInfos = styled.div`
    display: block;
    
    label {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        display: block;
    }

    input {
        padding: 8px;
        margin-bottom: 8px;
        width: 344px;
        background-color: #FFEBD9;
        border: none;
        outline: none;
    }
    
    div {
        display: flex;

        div:last-child {
            margin-left: 34px;
        }

        div {
            display: block;
            input {
            width: 155px;
        }

            label{
            display: block;
        }
        }
    }

    button {
        padding: 4px;
        width: 344px;
        margin-top: 24px;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        background-color: #FFEBD9;
        color: ${cores.corDoTexto};
        border: none;
        cursor: pointer;
    }
`

export const VoltaCarrinho = styled.button`
        padding: 4px;
        width: 344px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        background-color: #FFEBD9;
        color: ${cores.corDoTexto};
        border: none;
        cursor: pointer;
`

export const VoltaEndereco = styled.button` 
        margin-top: 8px;
        padding: 4px;
        width: 344px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        background-color: #FFEBD9;
        color: ${cores.corDoTexto};
        border: none;
        cursor: pointer;
`

export const CvvTitle = styled.h3`
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 16px;
        color: #FFEBD9;
`

export const CvvForm = styled.div`
    display: block;
    color: #FFEBD9;
    
    label {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        display: block;
    }

    input {
        padding: 8px;
        margin-bottom: 8px;
        width: 344px;
        background-color: #FFEBD9;
        border: none;
        outline: none;
    }
    
    div {
        display: flex;

        div:last-child {
            margin-left: 34px;
        }

        div {
            display: block;
        

            label{
            display: block;
        }
        }
    }

    button {
        padding: 4px;
        width: 344px;
        margin-top: 24px;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        background-color: #FFEBD9;
        color: ${cores.corDoTexto};
        border: none;
        cursor: pointer;
    }
`

export const NumCv = styled.input`
        padding: 8px;
        margin-bottom: 8px;
        max-width: 222px;
        background-color: #FFEBD9;
        border: none;
        outline: none;
`

export const Cvv = styled.input`
        padding: 8px;
        margin-bottom: 8px;
        max-width: 87px;
        background-color: #FFEBD9;
        border: none;
        outline: none;
`

export const MesCv = styled.input`
        padding: 8px;
        margin-bottom: 8px;
        max-width: 155px;
        background-color: #FFEBD9;
        border: none;
        outline: none;
`

export const AnoCv = styled.input`
        padding: 8px;
        margin-bottom: 8px;
        max-width: 155px;
        background-color: #FFEBD9;
        border: none;
        outline: none
`

export const ConfirmationContainer = styled.div`
    color: #FFEBD9;

    h3 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        margin-bottom: 16px;
        line-height: 22px;
    }
`

export const BotaoConclusao = styled(Link)`
    padding: 4px;
    width: 344px;
    margin-top: 24px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    background-color: #FFEBD9;
    color: ${cores.corDoTexto};
    border: none;
    cursor: pointer;
    text-decoration: none;
`