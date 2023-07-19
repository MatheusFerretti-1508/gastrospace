import { styled } from "styled-components";
import { cores } from "../../styles";


export const CardF = styled.div`
    width: 320px;
    height: 340px;
    padding: 8px;
    background-color: ${cores.corDoTexto};
    color: #fff;

    h3 {
        padding: 8px 0px;
        font-size: 16px;
        font-weight: bold;
    }

    p {
        font-size: 14px;
        font-weight: light;
        line-height: 22px;
        padding-bottom: 8px;
    }
`

export const ShopButton = styled.button`
    display: flex;
    align-items: center;
    width: 304px;
    height: 24px;
    padding: 4px 80px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    background-color: #FFEBD9;
    color: ${cores.corDoTexto};
    cursor: pointer;
`