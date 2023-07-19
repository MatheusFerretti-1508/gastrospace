import styled from "styled-components"
import HeaderBackgroundImg from '../../assets/images/fundo.png'
import LogoImg from '../../assets/images/logo.png'
import { cores } from "../../styles"
import { Link } from "react-router-dom"


export const HeaderContainer = styled.header`
    background-image: url(${HeaderBackgroundImg});
`

export const HeaderContent = styled.header`
    padding: 64px 0px 64px 0px;
    background-image: url(${HeaderBackgroundImg});
`

export const Logo = styled(Link)`
    width: 125px;
    height: 56px;
    background-image: url(${LogoImg});
`

export const HeaderRowContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderText = styled.h2`
    font-size: 18px;
    color: ${cores.corDoTexto};
`