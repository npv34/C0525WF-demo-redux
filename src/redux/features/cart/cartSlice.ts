import {createSlice} from "@reduxjs/toolkit";
import Product from "@/types/Product";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalQuantity: 0,
        totalMoney: 0
    },
    reducers: {
       addToCart: (state, action) => {
            const p: Product = action.payload;
            // @ts-ignore
            state.products.push(p)
            state.totalQuantity++;
            state.totalMoney += p.price;
       },
       removeItem: (state, action) => {
           const pRemove: Product = action.payload;
           state.totalQuantity--;
           state.totalMoney -= pRemove.price
           // @ts-ignore
           state.products = state.products.filter((p: Product) => p.id != pRemove.id);
       }
    }
})

export const {addToCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;