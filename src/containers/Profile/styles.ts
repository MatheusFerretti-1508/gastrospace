import styled from "styled-components"
import { cores } from "../../styles"

export const ProfileContainer = styled.div`
    position: relative;
    background-size: contain;
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.73);
    }
`

export const FoodsListContainer = styled.div`
    padding: 56px 0px 120px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    position: relative;
`


export const CardF = styled.div`
    position: relative;
    width: 320px;
    height: 420px;
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

    img {
        width: 304px;
        height: 167px;
        object-fit: cover;
    }

    button {
        
    }
`

export const DetailsButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 304px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    background-color: #FFEBD9;
    color: ${cores.corDoTexto};
    cursor: pointer;
    position: absolute;
    bottom: 4px;
    top: 390px;
`

export const HeroContainer = styled.div`
    padding: 0px 0px 0px 0px;
    height: 280px;
    /* background-image:  */
    background-color: #12a;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .5;

        content: '';
    }

    img {
        height: 100%;
        width: 100%;
    }
`   

export const HeroContent = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
`

export const Role = styled.p`
    display: flex;
    font-size: 32px;
    font-weight: 100;
    padding-top: 24px;
`

export const RestaurantName = styled.p`
    display: flex;
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 32px;
`