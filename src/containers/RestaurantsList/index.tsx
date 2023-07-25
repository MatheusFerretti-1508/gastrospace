import RestaurantCard, { Restaurant } from "../../components/RestaurantCard"
import { ContainerRestsList } from "./styles"
import { useGetRestaurantsQuery } from "../../services/api"

type Props = {
    restaurantes?: Restaurant[]
}

const RestaurantsList = ({restaurantes}: Props) => {

    return (
        <>
            <div className="container">
                <ContainerRestsList>
                    {restaurantes && restaurantes.map((restaurante) => (
                        <RestaurantCard
                        id={restaurante.id}
                        titulo={restaurante.titulo}
                        avaliacao={restaurante.avaliacao}
                        capa={restaurante.capa}
                        descricao={restaurante.descricao}
                        destacado={restaurante.destacado}
                        tipo={restaurante.tipo}
                        key={restaurante.id}
                        to={`/restaurantes/${restaurante.id}`}
                        />
                    ))}
                </ContainerRestsList>
            </div>
        </>
    )
}

export default RestaurantsList