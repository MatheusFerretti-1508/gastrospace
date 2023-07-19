import styled from "styled-components";
import HeaderBackgroundImg from '../../assets/images/fundo.png'
import { cores } from "../../styles";


export const FooterContainer = styled.header`
    background-image: url(${HeaderBackgroundImg});
`

export const FooterContent = styled.div`
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${cores.corDoTexto};
`

export const Logo = styled.img`
    width: 125px;
    height: 56px;
`

export const SocialLinks = styled.div`
    display: flex;
    padding-top: 32px;
    padding-bottom: 80px;
    
    img {
        margin-right: 8px;
        margin-left: 8px;
        height: 24px;
        width: 24px;
        cursor: pointer;
    }

    &:last-child{
        margin: 0;
    }
`

export const CoInfos = styled.p`
    padding-bottom: 40px;
    text-align: center;
`