import RestaurantCard from "../../components/RestaurantCard"
import { ContainerRestsList } from "./styles"

const RestaurantsList = () => {
    
    return (
        <>
            <div className="container">
                <ContainerRestsList>
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </ContainerRestsList>
            </div>
        </>
    )
}

export default RestaurantsList