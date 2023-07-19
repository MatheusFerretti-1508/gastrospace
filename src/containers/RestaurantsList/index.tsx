import RestaurantCard from "../../components/RestaurantCard"
import HiokiSushi from '../../assets/images/HiokiSushi.png'
import LaDolceVitaTrattoria from '../../assets/images/LaDoce.png'
import { ContainerRestsList } from "./styles"

const RestaurantsList = () => {
    
    return (
        <>
            <div className="container">
                <ContainerRestsList>
                    <RestaurantCard title="Hioki Sushi" tags={['Destaque da semana', 'Japonesa']} score="4.9" description={`Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!`} image={HiokiSushi}/>
                    <RestaurantCard title="La Dolce Vita Trattoria" tags={['Italiana']} score="4.6" description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!" image={LaDolceVitaTrattoria} />
                    <RestaurantCard title="La Dolce Vita Trattoria" tags={['Italiana']} score="4.6" description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!" image={LaDolceVitaTrattoria} />
                    <RestaurantCard title="La Dolce Vita Trattoria" tags={['Italiana']} score="4.6" description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!" image={LaDolceVitaTrattoria} />
                    <RestaurantCard title="La Dolce Vita Trattoria" tags={['Italiana']} score="4.6" description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!" image={LaDolceVitaTrattoria} />
                    <RestaurantCard title="La Dolce Vita Trattoria" tags={['Italiana']} score="4.6" description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!" image={LaDolceVitaTrattoria} />
                </ContainerRestsList>
            </div>
        </>
    )
}

export default RestaurantsList