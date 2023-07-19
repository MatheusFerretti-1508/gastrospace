import { HeroContainer, HeroContent, RestaurantName, Role } from "./styles"

const Hero = () => {

    return (
        <HeroContainer>
            <HeroContent className="container">
                <Role>Italiana</Role>
                <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero