import { styled } from "styled-components";


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