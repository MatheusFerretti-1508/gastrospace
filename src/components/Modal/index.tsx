/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-types */
import { ModalContainer, ButtonShop, ModalWrittenContent } from "./styles"

export type Props = {
    foto: string,
    nomePrato: string,
    descricaoPrato: string,
    porcao: string,
    preco: number,
    aoClicar: any,
    id: number
}


const Modal = ({descricaoPrato, foto, nomePrato, porcao, preco, aoClicar, id}:Props) => {

    return (
        <>
            <ModalContainer key={id}>
                <img src={foto} alt="" />
                <ModalWrittenContent>
                    <h3>{nomePrato}</h3>
                    <p>
                        {descricaoPrato}
                    </p>
                    <p>{porcao}</p>
                    <ButtonShop onClick={() => aoClicar()} type="button">Adicionar ao carrinho - R$ {preco}</ButtonShop>
                </ModalWrittenContent>
            </ModalContainer>
        </>
    )
}

export default Modal