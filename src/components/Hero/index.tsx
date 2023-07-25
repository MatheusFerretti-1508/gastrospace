import { HeroContainer, HeroContent, RestaurantName, Role } from "./styles"
import { Restaurant } from "../RestaurantCard"

export type Props = {
    restaurant?: Restaurant
}
const Hero = ({restaurant}: Props) => {

    return (
        <>
        <HeroContainer style={{backgroundImage: `url(${restaurant!.capa})`}}>
            <HeroContent className="container">
                <Role>{restaurant?.avaliacao}</Role>
                <RestaurantName>{restaurant?.titulo}</RestaurantName>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default Hero