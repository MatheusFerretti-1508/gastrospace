/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { AllInfo, ButtonMore, CardR, ContainerTags, MainInfo, RestDescription, Tag } from "./styles"
import Estrela from '../../assets/images/estrela.png'



export type Restaurant = {
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: [
        {
        foto: string,
        preco: number,
        id: number,
        nome: string,
        descricao: string,
        porcao: string
    }
]
}

export type Menu = {
    foto: string,
    preco: number,
    id: number,
    nome: string,
    descricao: string,
    porcao: string
}

type Props = {
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    to?: string
}

const RestaurantCard = ({avaliacao, capa, descricao, destacado, id, tipo, titulo, to}: Props) => {

    return (
        <>
        <CardR key={id}>
            <img src={capa} alt="Nome do Restaurante" />
            <ContainerTags>
                <Tag>{tipo}</Tag>
                {destacado ? (
                    <Tag>Destaque da semana</Tag>
                ) : ''}
            </ContainerTags>
            <AllInfo>
                <MainInfo>
                    <h3>{titulo}</h3>
                    <div>
                        <p>{avaliacao}</p> <img src={Estrela} alt="" />
                    </div>
                </MainInfo>
                <RestDescription>
                {descricao}
                </RestDescription>
                <ButtonMore to={to as string}>Saiba mais</ButtonMore>
            </AllInfo>
        </CardR>
        </>
    )
}

export default RestaurantCard