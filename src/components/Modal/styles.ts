import { styled } from "styled-components";
import { cores } from "../../styles";


export const ModalContainer = styled.div`
    background-color: ${cores.corDoTexto};
    color: #fff;
    display: flex;
    padding: 32px;
    position: absolute;
    max-width: 1024px;
    height: 344px;
    bottom: 490px;
    z-index: 2;
    top: 20%;

    img {
        height: 280px;
        width: 280px;
        margin-right: 24px;
    }
`

export const ModalWrittenContent = styled.div`

    h3 {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
    }
`

export const ButtonShop = styled.button`
    padding: 4px 8px; 
    background-color: #fff;
    color: ${cores.corDoTexto};
    font-size: 14px;
    font-weight: bold;
    border: none;

    cursor: pointer;
`