/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import lixeiraImg from '../../assets/images/lixeira-de-reciclagem 1.png'
import { CartContainer, CartItem, CartInfos, BuyFormContainer, FormInfos, VoltaCarrinho, VoltaEndereco, CvvForm, CvvTitle, NumCv, Cvv, MesCv, AnoCv, ConfirmationContainer, BotaoConclusao } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"
import { RootReducer } from '../../store'
import { Menu } from '../RestaurantCard'
import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { clear } from '../../store/reducers/cart'


const Cart = () => { 
    const {itens} = useSelector((state: RootReducer) => state.cart)
    const [purchase, { isSuccess }] = usePurchaseMutation()

    const [isCartVisible, setIsCartVisible] = useState(true)
    const [isLocationInfoVisible, setIsLocationInfoVisible] = useState(false)
    const [isBuyInfoVisible, setIsBuyInfoVisible] = useState(false)
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)

    const dispatch = useDispatch()

    const form = useFormik({
        initialValues: {
            nomeCv: '',
            numCv: '',
            cvv: '',
            mesCv: '',
            anoCv: '',
            cep: '',
            cidade: '',
            endereco: '',
            numero: '',
            receptor: '',
            complemento: '',
        },
        validationSchema: Yup.object({
            nomeCv: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            numCv: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            cvv: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            mesCv: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            anoCv: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            cep: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            cidade: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            endereco: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            numero: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            receptor: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
            complemento: Yup.string().when((_values, schema) => 
            schema.required('O campo é obrigatório')),
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    receiver: values.receptor,
                    address: {
                        city: values.cidade,
                        complement: values.complemento,
                        number: Number(values.numero),
                        zipCode: values.cep,
                        description: values.endereco
                    }
                },
                payment: {
                    card: {
                        code: Number(values.cvv),
                        number: values.numCv,
                        name: values.nomeCv,
                        expires: {
                            month: Number(values.mesCv),
                            year: Number(values.anoCv)
                        }
                    }
                },
                products: []
            })
            // ({
            //     pagamento: {
            //         cartao: {
            //             numero: values.numCv,
            //             cvv: Number(values.cvv),
            //             nome: values.nomeCv,
            //             vencimento: {
            //                 ano: Number(values.anoCv),
            //                 mes: Number(values.mesCv)
            //             }
            //         }
            //     },
            //     produtos: itens.map((item) => ({
            //         id: item.id,
            //         preco: item.preco
            //     })),
            //     entrega: {
            //         cep: Number(values.cep),
            //         cidade: values.cidade,
            //         endereco: values.endereco,
            //         numero: Number(values.numero),
            //         receptor: values.receptor,
            //         complemento: values.complemento,
            //     }
            // })
        },
    })

    useEffect(() => {
        if (isSuccess) {
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

    const precoTotal = (items: Menu[]) => {
        return items.reduce((accumulator, currentItem) => {
            if (currentItem.preco) {
                return (accumulator += currentItem.preco)
            }
            return 0
        }, 0)
    }

    const getErrorMessage = (fieldName: string, message?: string) => {
        const estaAlterado = fieldName in form.touched
        const estaInvalido = fieldName in form.errors

        if (estaAlterado && estaInvalido) return message
        return ''
    }

    console.log(form)

    return (
        <CartContainer>
            {isCartVisible ? (
                <>
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
                    <button onClick={() => {setIsCartVisible(false), setIsLocationInfoVisible(true)}} type='button'>Continuar com a entrega</button>
                </CartInfos>
                </>
            ): ''}
            <form onSubmit={form.handleSubmit}>
            {isLocationInfoVisible ? (
                                <BuyFormContainer>
                                <h3>Entrega</h3>
                                <FormInfos>

                                        <label htmlFor="receptor">Quem irá receber</label>
                                        <input required 
                                        type="text" 
                                        id="receptor" 
                                        name='receptor'
                                        value={form.values.receptor}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        />
                                        <small>{getErrorMessage('receptor', form.errors.receptor)}</small>
                                    
                                        <label htmlFor="endereco">Endereço</label>
                                        <input required type="text" id="endereco" name='endereco'
                                        value={form.values.endereco}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur} />
                                        <small>{getErrorMessage('endereco', form.errors.receptor)}</small>

                                        <label htmlFor="cidade">Cidade</label>
                                        <input required type="text" id="cidade" name='cidade'
                                        value={form.values.cidade}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur} />
                                        <small>{getErrorMessage('cidade', form.errors.receptor)}</small>
                                    <div>
                                        <div>
                                            <label htmlFor="cep">CEP</label>
                                            <input required type="text" id="cep" name='cep'
                                            value={form.values.cep}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur} />
                                            <small>{getErrorMessage('cep', form.errors.receptor)}</small>
                                        </div>
                                        <div>
                                            <label htmlFor="numero">Número</label>
                                            <input required type="text" id="numero" name='numero'
                                            value={form.values.numero}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur} />
                                            <small>{getErrorMessage('numero', form.errors.receptor)}</small>
                                        </div>
                                    </div>
                                        <label htmlFor="complemento">Complemento(opcional)</label>
                                        <input type="text" id="complemento" name='complemento'
                                        value={form.values.complemento}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur} />
                                        <small>{getErrorMessage('complemento', form.errors.receptor)}</small>
                                        <button onClick={() => {setIsBuyInfoVisible(true), setIsLocationInfoVisible(false)}} type="button">Continuar com o pagamento</button>
                                </FormInfos>
                                <VoltaCarrinho onClick={() => {setIsCartVisible(true), setIsLocationInfoVisible(false)}} type="button">Voltar para o carrinho</VoltaCarrinho>
                            </BuyFormContainer>
            ): ''}
            {isBuyInfoVisible ? (
                <div>
                <CvvTitle>Pagamento - Valor a pagar R$ {precoTotal(itens)}</CvvTitle>
                <CvvForm>
                    <label htmlFor="nome-cv">Nome no cartão</label>
                    <input required type="text" id="nome-cv" name='nomeCv'
                    value={form.values.nomeCv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur} />
                    <small>{getErrorMessage('nomeCv', form.errors.receptor)}</small>
                    <div>
                        <div>
                        <label htmlFor="num-cv">Número do cartão</label>
                        <NumCv required type="text" id="num-cv" name='numCv'
                        value={form.values.numCv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur} />
                        <small>{getErrorMessage('numCv', form.errors.receptor)}</small>
                        </div>
                        <div>
                        <label htmlFor="cvv">CVV</label>
                        <Cvv required type="text" id="cvv" name='cvv'
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur} />
                        <small>{getErrorMessage('cvv', form.errors.receptor)}</small>
                        </div>
                    </div>
                    <div>
                        <div>
                        <label htmlFor="mes-cv">Mês de vencimento</label>
                        <MesCv required type="text" id="mes-cv" name='mesCv'
                        value={form.values.mesCv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur} />
                        <small>{getErrorMessage('mesCv', form.errors.receptor)}</small>
                        </div>
                        <div>
                        <label htmlFor="ano-cv">Ano de vencimento</label>
                        <AnoCv required type="text" id="ano-cv" name='anoCv'
                        value={form.values.anoCv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur} />
                        <small>{getErrorMessage('anoCv', form.errors.receptor)}</small>
                        </div>
                    </div>
                    <button onClick={() => {setIsBuyInfoVisible(false), setIsConfirmationVisible(true), form.handleSubmit}} type='button'>Finalizar pagamento</button>
                </CvvForm>
                <VoltaEndereco onClick={() => {setIsBuyInfoVisible(false), setIsLocationInfoVisible(true)} } type='button'>Voltar para a edição de endereço</VoltaEndereco>
                </div>
            ): ''}
            </form>
            {isConfirmationVisible ? (
                <ConfirmationContainer>
                    <h3>Pedido realizado - {form.values.nomeCv}</h3>
                    <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
                    <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </p>
                    <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                    <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
                    <BotaoConclusao to={'/'} onClick={() => dispatch(clear)}  type='button'>Concluir</BotaoConclusao>
                </ConfirmationContainer>
            ) : ''}
        </CartContainer>
    )
}


export default Cart