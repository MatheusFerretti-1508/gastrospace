import lixeiraImg from '../../assets/images/lixeira-de-reciclagem 1.png'
import { CartContainer, CartItem, CartInfos } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Menu } from '../RestaurantCard'

const Cart = () => { 
    const {itens} = useSelector((state: RootReducer) => state.cart)

    const precoTotal = (items: Menu[]) => {
        return items.reduce((accumulator, currentItem) => {
            if (currentItem.preco) {
                return (accumulator += currentItem.preco)
            }
            return 0
        }, 0)
    }

    return (
        <CartContainer>
            {itens.map((item) => (
                <CartItem key={item.id}>
                <img src={item.foto} alt="" />
                <div>
                    <h4>{item.nome}</h4>
                    <p>R$ {item.preco}</p>
                </div>
                <img src={lixeiraImg} alt="" />
                </CartItem>
            ))}
            <CartInfos>
                <div>
                    <p>
                        Valor total
                    </p>
                    <p>
                        R$ {precoTotal(itens)}
                    </p>
                </div>
                <button>Continuar com a entrega</button>
            </CartInfos>
        </CartContainer>
    )
}

export default Cart