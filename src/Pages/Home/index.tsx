import Footer from "../../containers/Footer"
import Header from "../../containers/Header"
import RestaurantsList from "../../containers/RestaurantsList"
import { useGetRestaurantsQuery } from "../../services/api"


const Home = () => {
    const { data: restaurants } = useGetRestaurantsQuery()

    return (
        <>
            <Header />
            <RestaurantsList restaurantes={restaurants} />
            <Footer />
        </>
    )
}

export default Home