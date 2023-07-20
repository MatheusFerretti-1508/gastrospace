import { CardF, DetailsButton } from "./styles"
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
                <DetailsButton type="button">Mais detalhes</DetailsButton>
            </CardF>
        </>
    )
}

export default FoodCard