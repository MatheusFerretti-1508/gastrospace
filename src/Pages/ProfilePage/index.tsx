import { useParams } from "react-router-dom"
import Profile from "../../containers/Profile"
import { useGetRestaurantQuery } from "../../services/api"

type RestaurantParams = {
    id: string
}

const ProfilePage = () => {
    const { id } = useParams() as RestaurantParams
    const { data: restauranteAlvo} = useGetRestaurantQuery(id)

    return (
        <>
            <Profile restaurante={restauranteAlvo} />
        </>
    )
}

export default ProfilePage