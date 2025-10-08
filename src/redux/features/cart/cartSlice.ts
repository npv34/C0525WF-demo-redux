import {createSlice} from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalQuantity: 10,
        totalMoney: 0
    },
    reducers: {
       addToCart: (state, payload) => {
            state.totalQuantity++;
       }
    }
})

export const {addToCart } = cartSlice.actions;

export default cartSlice.reducer;