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
        }
    }
})

export const {add} = cartSlice.actions
export default cartSlice.reducer