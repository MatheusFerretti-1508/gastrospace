import { styled } from "styled-components";
import { cores } from "../../styles";


export const CartContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 32px 8px 1164px 8px;
    width: 360px;
    height: 100%;
    background-color: ${cores.corDoTexto};
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