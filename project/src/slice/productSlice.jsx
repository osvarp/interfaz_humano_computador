import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:{},
};

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{
        addProduct : ( state, product ) => {
            //state.value = { ...state.value, product.id : product };
            state.value[product.id] = product;
        },
        removeProduct : ( state, product ) => {
            delete state.value[product.id];
        },
    },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;