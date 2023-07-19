import { styled } from "styled-components";
import HeroBackImg from '../../assets/images/ItalianHero.png'

export const HeroContainer = styled.div`
    padding: 24px 0px 32px 0px;
    height: 280px;
    background-color: #12a;
    background-image: url(${HeroBackImg});
    position: relative;

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
    font-size: 32px;
    font-weight: 100;
`

export const RestaurantName = styled.p`
    font-size: 32px;
    font-weight: bold;
`