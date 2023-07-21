import { useState } from "react"
import HeaderProfile from "../../components/HeaderProfile"
import Hero from "../../components/Hero"
import PizzaMarguerita from '../../assets/images/pizza-marguerita.png'
// import FoodsList from "../../containers/FoodsList"
import Footer from "../../containers/Footer"
import { CardF, DetailsButton, FoodsListContainer, ProfileContainer } from "./styles"
import Modal from "../../components/Modal"

const Profile = () => {
    const [modal, setModal] = useState(false)

    return (
        <ProfileContainer>
            <div>
                <HeaderProfile />
                <Hero />
                <div className="container">
                    <FoodsListContainer>
                        <CardF>
                            <img src={PizzaMarguerita} alt="" />
                            <h3>Pizza Marguerita</h3>
                            <p>
                                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                            </p>
                            <DetailsButton onClick={() => setModal(true)} type="button">Mais detalhes</DetailsButton>
                        </CardF>
                        <CardF>
                            <img src={PizzaMarguerita} alt="" />
                            <h3>Pizza Marguerita</h3>
                            <p>
                                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                            </p>
                            <DetailsButton onClick={() => setModal(true)} type="button">Mais detalhes</DetailsButton>
                        </CardF>
                        <CardF>
                            <img src={PizzaMarguerita} alt="" />
                            <h3>Pizza Marguerita</h3>
                            <p>
                                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                            </p>
                            <DetailsButton onClick={() => setModal(true)} type="button">Mais detalhes</DetailsButton>
                        </CardF>
                        <CardF>
                            <img src={PizzaMarguerita} alt="" />
                            <h3>Pizza Marguerita</h3>
                            <p>
                                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                            </p>
                            <DetailsButton onClick={() => setModal(true)} type="button">Mais detalhes</DetailsButton>
                        </CardF>
                        <CardF>
                            <img src={PizzaMarguerita} alt="" />
                            <h3>Pizza Marguerita</h3>
                            <p>
                                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                            </p>
                            <DetailsButton onClick={() => setModal(true)} type="button">Mais detalhes</DetailsButton>
                        </CardF>
                        <CardF>
                            <img src={PizzaMarguerita} alt="" />
                            <h3>Pizza Marguerita</h3>
                            <p>
                                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                            </p>
                            <DetailsButton onClick={() => setModal(true)} type="button">Mais detalhes</DetailsButton>
                        </CardF>
                        {modal ? (
                            <Modal />
                        ) : ''}
                    </FoodsListContainer>
                </div>
                <Footer />
            </div>
            {modal ? (
                <div onClick={() => setModal(!modal)} className="overlay"></div>
            ): ''}
        </ProfileContainer>
    )
}

export default Profile