import { styled } from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const CardR = styled.div`
    width: 472px;
    /* height: 398px; */
    color: ${cores.corDoTexto};
    position: relative;
`

export const AllInfo = styled.div`
    margin-top: -4px;
    padding: 8px 8px 12px 8px;
    border-left: 1px solid ${cores.corDoTexto};
    border-right: 1px solid ${cores.corDoTexto};
    border-bottom: 1px solid ${cores.corDoTexto};
`

export const MainInfo = styled.div`
    margin-bottom: 16px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 18px;
    }

    p {
        margin-right: 8px;
        font-size: 14px;
        line-height: 22px;
    }

    div {
        font-weight: bold;
        font-size: 18px;
        display: flex;

        img {
            height: 21px;
            width: 21px;
        }
    }
`

export const RestDescription = styled.p`
    margin-bottom: 16px;
    font-size: 14px;
`

export const ButtonMore = styled(Link)`
    font-size: 14px;
    padding: 4px 6px;
    width: 82px;
    height: 24px;
    background-color: ${cores.corDoTexto};
    color: #fff;
    text-decoration: none;
    border: none;
    cursor: pointer;
    `
    
export const Tag = styled.p`
    background-color: ${cores.corDoTexto};
    color: #fff;
    padding: 6px 4px;
    font-size: 12px;
    font-weight: bold;
    `

export const ContainerTags = styled.div`
    display: flex;
    justify-content: end;
    top: 16px;
    right: 8px;
    position: absolute;

    > ${Tag} {
        margin-right: 8px;
    }
`