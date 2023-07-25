import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
    mensagem: 'oi'
}

const initialState: CartState = {
    mensagem: 'oi'
}

const cartSlice = createSlice({
    name: 'ola',
    initialState,
    reducers: {
        oi: (state) => {
            state.mensagem = 'oi'
        }
    }
})

export const { oi } = cartSlice.actions
export default cartSlice.reducer