import FoodCard from "../../components/FoodCard"
import { FoodsListContainer } from "./styles"

const FoodsList = () => {

    return (
        <>
            <div className="container">
                <FoodsListContainer>
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </FoodsListContainer>
            </div>
        </>
    )
}

export default FoodsList