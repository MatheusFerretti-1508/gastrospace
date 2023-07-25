import PizzaImg from '../../assets/images/pizza-marguerita.png'
import lixeiraImg from '../../assets/images/lixeira-de-reciclagem 1.png'
import { CartContainer, CartItem, CartInfos } from './styles'

const Cart = () => {

    return (
        <CartContainer>
            <CartItem>
                <img src={PizzaImg} alt="" />
                <div>
                    <h4>Pizza Margueritta</h4>
                    <p>R$ 60,00</p>
                </div>
                <img src={lixeiraImg} alt="" />
            </CartItem>
            <CartItem>
                <img src={PizzaImg} alt="" />
                <div>
                    <h4>Pizza Margueritta</h4>
                    <p>R$ 60,00</p>
                </div>
                <img src={lixeiraImg} alt="" />
            </CartItem>
            <CartItem>
                <img src={PizzaImg} alt="" />
                <div>
                    <h4>Pizza Margueritta</h4>
                    <p>R$ 60,00</p>
                </div>
                <img src={lixeiraImg} alt="" />
            </CartItem>
            <CartInfos>
                <div>
                    <p>
                        Valor total
                    </p>
                    <p>
                        R$ 140,00
                    </p>
                </div>
                <button>Continuar com a entrega</button>
            </CartInfos>
        </CartContainer>
    )
}

export default Cart