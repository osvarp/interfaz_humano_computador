import { configureStore } from '@reduxjs/toolkit';
import productSlice from "./productSlice.jsx"

export const store = configureStore({
    reducer: {
        product: productSlice, 
    },
})
