import { ModalContainer, ButtonShop, ModalWrittenContent } from "./styles"
import PizzaModalImg from '../../assets/images/pizzaModal.png'


const Modal = () => {

    return (
        <>
            <ModalContainer>
                <img src={PizzaModalImg} alt="" />
                <ModalWrittenContent>
                    <h3>Pizza Marguerita</h3>
                    <p>
                        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade
                        e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de 
                        tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem.
                        A combinação de sabores é perfeita, com o molho de tomate suculento e 
                        ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam 
                        um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares 
                        e é uma ótima opção para qualquer ocasião.
                    </p>
                    <p>Serve: de 2 a 3 pessoas</p>
                    <ButtonShop type="button">Adicionar ao carrinho - R$ 60,90</ButtonShop>
                </ModalWrittenContent>
            </ModalContainer>
        </>
    )
}

export default Modal