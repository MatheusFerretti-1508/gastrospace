import { useState } from "react"
import FoodCard from "../../components/FoodCard"
import PizzaMarguerita from '../../assets/images/pizza-marguerita.png'
import Modal from "../../components/Modal"
import { CardF, DetailsButton, FoodsListContainer } from "./styles"

type Props = {
    isModalOnScreen: string
}

const FoodsList = ({isModalOnScreen}: Props) => {
    const [modal, setModal] = useState(false)
    const [isModalOn, setIsModalOn] = useState(false)

    return (
        <div onClick={() => setModal(!modal)}>
            <div className="container">
                <FoodsListContainer>
                    <CardF>
                        <img src={PizzaMarguerita} alt="" />
                        <h3>Pizza Marguerita</h3>
                        <p>
                            A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                        </p>
                        <DetailsButton type="button">Mais detalhes</DetailsButton>
                    </CardF>
                    <CardF>
                        <img src={PizzaMarguerita} alt="" />
                        <h3>Pizza Marguerita</h3>
                        <p>
                            A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                        </p>
                        <DetailsButton type="button">Mais detalhes</DetailsButton>
                    </CardF>
                    <CardF>
                        <img src={PizzaMarguerita} alt="" />
                        <h3>Pizza Marguerita</h3>
                        <p>
                            A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                        </p>
                        <DetailsButton type="button">Mais detalhes</DetailsButton>
                    </CardF>
                    <CardF>
                        <img src={PizzaMarguerita} alt="" />
                        <h3>Pizza Marguerita</h3>
                        <p>
                            A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                        </p>
                        <DetailsButton type="button">Mais detalhes</DetailsButton>
                    </CardF>
                    <CardF>
                        <img src={PizzaMarguerita} alt="" />
                        <h3>Pizza Marguerita</h3>
                        <p>
                            A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                        </p>
                        <DetailsButton type="button">Mais detalhes</DetailsButton>
                    </CardF>
                    <CardF>
                        <img src={PizzaMarguerita} alt="" />
                        <h3>Pizza Marguerita</h3>
                        <p>
                            A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                        </p>
                        <DetailsButton onClick={() => setModal(true) && setIsModalOn(true)} type="button">Mais detalhes</DetailsButton>
                    </CardF>
                    { modal ? (
                        <Modal />
                    ): ''}
                </FoodsListContainer>
            </div>
        </div>
    )
}

export default FoodsList