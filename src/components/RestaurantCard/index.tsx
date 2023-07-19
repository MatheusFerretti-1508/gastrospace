import { AllInfo, ButtonMore, CardR, ContainerTags, MainInfo, RestDescription, Tag } from "./styles"
import Estrela from '../../assets/images/estrela.png'

type Props = {
    title: string,
    score: string,
    description: string,
    tags: string[],
    image: string,
}

const RestaurantCard = ({tags, title, description, score, image}: Props) => {

    return (
        <>
            <CardR>
                <img src={image} alt="Nome do Restaurante" />
                <ContainerTags>
                    {tags.map((tag) => <Tag>{tag}</Tag>)}
                </ContainerTags>
                <AllInfo>
                    <MainInfo>
                        <h3>{title}</h3>
                        <div>
                            <p>{score}</p> <img src={Estrela} alt="" />
                        </div>
                    </MainInfo>
                    <RestDescription>
                    {description}
                    </RestDescription>
                    <ButtonMore to={'/restaurante'}>Saiba mais</ButtonMore>
                </AllInfo>
            </CardR>
        </>
    )
}

export default RestaurantCard