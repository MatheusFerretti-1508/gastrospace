/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react"
import HeaderProfile from "../../components/HeaderProfile"
import Footer from "../Footer"
import { FoodsListContainer, HeroContainer, ProfileContainer, RestaurantName, Role, HeroContent, CardF, DetailsButton } from "./styles"
import { Restaurant } from "../../components/RestaurantCard"
import Modal from "../../components/Modal"
import Cart from "../../components/Cart"

type Props = {
    restaurante?: Restaurant
}

const Profile = ({ restaurante }: Props) => {
    const [modal, setModal] = useState({
        isVisible: false,
        descricao: '',
        foto: '',
        nomeDoPrato: '',
        porcao: '',
        preco: '',
    })

    return (
        <>
            <ProfileContainer>
                <div>
                    <HeaderProfile />
                    <HeroContainer style={{ backgroundImage: `url(${restaurante?.capa})` }}>
                        <HeroContent className="container">
                            <Role>{restaurante?.tipo}</Role>
                            <RestaurantName>{restaurante?.titulo}</RestaurantName>
                        </HeroContent>
                    </HeroContainer>
                    {/* <Hero restaurant={restaurante}/> */}
                    <div className="container">
                        {/* <FoodsList pratos={restaurante?.cardapio} /> */}
                        <FoodsListContainer>
                            {restaurante?.cardapio.map((prato) => (
                                <>
                                <CardF key={prato.id}>
                                <img src={prato.foto} alt="" />
                                <h3>{prato.nome}</h3>
                                <p>
                                    {prato.descricao}
                                </p>
                                <DetailsButton onClick={() => setModal({
                                    isVisible: true,
                                    descricao: prato.descricao,
                                    foto: prato.foto,
                                    nomeDoPrato: prato.nome, 
                                    porcao: prato.porcao,
                                    preco: prato.preco.toString(),
                                }) } type="button">Mais detalhes</DetailsButton>
                                </CardF>
                                {modal.isVisible === true ? (
                                <Modal 
                                descricaoPrato={modal.descricao} 
                                foto={modal.foto}
                                nomePrato={modal.nomeDoPrato}
                                porcao={modal.porcao}
                                preco={modal.preco}
                                />
                                ): ''}
                                </>
                            ))}
                        </FoodsListContainer>
                    </div>
                    <Footer />
                    {modal.isVisible === true ? (
                        <>
                            <div onClick={() => setModal({
                                isVisible: false,
                                descricao: '',
                                foto: '',
                                nomeDoPrato: '',
                                porcao: '',
                                preco: '',
                            })} className="overlay"></div>
                        </>
                    ) : ''}
                    <Cart />
                </div>
            </ProfileContainer>
        </>
    )
}

export default Profile