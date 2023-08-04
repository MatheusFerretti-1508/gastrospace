import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Menu } from "../../components/RestaurantCard";

type CartState = {
    itens: Menu[],
    isOpen: boolean
}

const initialState: CartState = {
    itens: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Menu>) => {
            const prato = state.itens.find((item) => item.id === action.payload.id)

            if (!prato) {
                state.itens.push(action.payload)
            }
        },
        clear: (state) => {
            state.itens = []
        },
        remove: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((item) => item.id !== action.payload)
        },
    }
})

export const {add, clear, remove} = cartSlice.actions
export default cartSlice.reducer