import { styled } from "styled-components";
import HeaderBackgroundImg from '../../assets/images/fundo.png'
import { cores } from "../../styles";


export const HeaderContainer = styled.header`
    background-image: url(${HeaderBackgroundImg});
`

export const HeaderContent = styled.header`
    padding: 64px 0px 40px 0px;
    background-image: url(${HeaderBackgroundImg});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    width: 125px;
    height: 56px;
    margin-bottom: 138px;
`

export const Slogan = styled.p`
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
    width: 540px;
    text-align: center;
    color: ${cores.corDoTexto};
`