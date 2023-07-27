/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react"
// import HeaderProfile from "../../components/HeaderProfile"
import Footer from "../Footer"
import { FoodsListContainer, HeroContainer, ProfileContainer, RestaurantName, Role, HeroContent, CardF, DetailsButton, HeaderContainer, HeaderContent, HeaderRowContent, HeaderText, Logo } from "./styles"
import { Restaurant } from "../../components/RestaurantCard"
import Modal from "../../components/Modal"
import Cart from "../../components/Cart"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from '../../store'
import { add } from "../../store/reducers/cart"
import { Menu } from "../../components/RestaurantCard";

type Props = {
    restaurante?: Restaurant
}

const Profile = ({ restaurante }: Props) => {
    const [modal, setModal] = useState({
        isVisible: false,
        descricao: '',
        foto: '',
        nome: '',
        porcao: '',
        preco: 0,
        id: 0,
    })
    const [isCartVisible, setIsCartVisible] = useState(false)
    const dispatch = useDispatch()
    const {itens} = useSelector((state: RootReducer) => state.cart)

    const AddToCart = (prato: Menu) => {
        dispatch(add(prato))
        // console.log('oi')
    }

    return (
        <>
            <ProfileContainer>
                <div>
                    <HeaderContainer>
                        <HeaderContent className="container">
                            <HeaderRowContent>
                                <HeaderText>Restaurantes</HeaderText>
                                <Logo to={'/'} />
                                <HeaderText onClick={() => setIsCartVisible(true)}>{itens.length} produto(s) no carrinho</HeaderText>
                            </HeaderRowContent>
                        </HeaderContent>
                    </HeaderContainer>
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
                                            id: prato.id,
                                            isVisible: true,
                                            descricao: prato.descricao,
                                            foto: prato.foto,
                                            nome: prato.nome,
                                            porcao: prato.porcao,
                                            preco: prato.preco,
                                        })} type="button">Mais detalhes</DetailsButton>
                                    </CardF>
                                    {modal.isVisible === true ? (
                                        <Modal
                                            id={modal.id}
                                            descricaoPrato={modal.descricao}
                                            foto={modal.foto}
                                            nomePrato={modal.nome}
                                            porcao={modal.porcao}
                                            preco={modal.preco}
                                            aoClicar={AddToCart(modal)}
                                        />
                                    ) : ''}
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
                                nome: '',
                                porcao: '',
                                preco: 0,
                                id: 0,
                            })} className="overlay"></div>
                        </>
                    ) : ''}
                    {isCartVisible && (
                        <>
                            <Cart />
                            <div onClick={() => setIsCartVisible(false) } className="overlay"></div>
                        </>
                    )}
                </div>
            </ProfileContainer>
        </>
    )
}

export default Profile