import { ModalContainer, ButtonShop, ModalWrittenContent } from "./styles"

export type Props = {
    foto: string,
    nomePrato: string,
    descricaoPrato: string,
    porcao: string
    preco: string
}


const Modal = ({descricaoPrato, foto, nomePrato, porcao, preco}:Props) => {

    return (
        <>
            <ModalContainer>
                <img src={foto} alt="" />
                <ModalWrittenContent>
                    <h3>{nomePrato}</h3>
                    <p>
                        {descricaoPrato}
                        {/* A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade
                        e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de 
                        tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem.
                        A combinação de sabores é perfeita, com o molho de tomate suculento e 
                        ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam 
                        um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares 
                        e é uma ótima opção para qualquer ocasião. */}
                    </p>
                    <p>{porcao}</p>
                    <ButtonShop type="button">Adicionar ao carrinho - R$ {preco}</ButtonShop>
                </ModalWrittenContent>
            </ModalContainer>
        </>
    )
}

export default Modal