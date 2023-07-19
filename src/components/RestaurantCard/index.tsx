import { AllInfo, ButtonMore, CardR, ContainerTags, MainInfo, RestDescription, Tag } from "./styles"
import HiokiSushi from '../../assets/images/HiokiSushi.png'
import Estrela from '../../assets/images/estrela.png'

const RestaurantCard = () => {

    return (
        <>
            <CardR>
                <img src={HiokiSushi} alt="Nome do Restaurante" />
                <ContainerTags>
                    <Tag>Destaque da semana</Tag>
                    <Tag>Japonesa</Tag>
                </ContainerTags>
                <AllInfo>
                    <MainInfo>
                        <h2>Hioki Sushi</h2>
                        <div>
                            <p>4.9</p> <img src={Estrela} alt="" />
                        </div>
                    </MainInfo>
                    <RestDescription>
                    Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
                    </RestDescription>
                    <ButtonMore type="button">Saiba mais</ButtonMore>
                </AllInfo>
            </CardR>
        </>
    )
}

export default RestaurantCard