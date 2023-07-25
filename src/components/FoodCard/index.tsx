import { CardF, DetailsButton } from "./styles"

type Props = {
    foto: string,
    nome: string,
    descricao: string,
}

const FoodCard = ({descricao, foto, nome}:Props) => {

    return (
        <>
            <CardF>
                <img src={foto} alt="" />
                <h3>{nome}</h3>
                <p>
                {descricao}
                </p>
                <DetailsButton type="button">Mais detalhes</DetailsButton>
            </CardF>
        </>
    )
}

export default FoodCard