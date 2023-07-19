import { CardF, ShopButton } from "./styles"
import PizzaMarguerita from '../../assets/images/pizza-marguerita.png'

const FoodCard = () => {

    return (
        <>
            <CardF>
                <img src={PizzaMarguerita} alt="" />
                <h3>Pizza Marguerita</h3>
                <p>
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                </p>
                <ShopButton type="button">Adicionar ao carrinho</ShopButton>
            </CardF>
        </>
    )
}

export default FoodCard