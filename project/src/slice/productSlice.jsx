import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "asterion_0":{
        id: "asterion_0",
        username: "asterion",
        productName: "brownie",
        price: 200,
        productImage: "/public/productImages/asterion_brownie.png",
        productDescription: "Rico brownie para pasar la tarde",
        inStock: true,
    }, 
    "jeronimo_0":{
        id:"jeronimo_0",
        username: "jeronimo",
        productName: "durazno",
        price: 8000,
        productImage: "/public/productImages/jeronimo_durazno.png",
        productDescription: "Un durazno. Esta bueno.",
        inStock: true,
    },
    "doña_florinda_0":{
        id: "doña_florinda_0",
        username: "doña_florinda",
        productName: "pato de hule",
        price: 4000,
        productImage: "/public/productImages/dona_florinda_patoDeHule.jpeg",
        productDescription: "Debugea como los dioses usando la renombrada técnica del ‘rubber duck’.",
        inStock: true,
    }
};

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{
        addProduct : ( state, action ) => {
            state[action.payload.id] = action.payload;
        },
        removeProduct : ( state, action ) => {
            delete state[action.payload];
        },
        changeStockState : ( state, action ) => {
            state[action.payload.product].inStock = action.payload.stock;
        },
        modifyProductData : ( state, action ) => {
            Object.keys( action.payload ).map( (key) => {
                state[action.payload.id][key] = action.payload[key];
            } );
        }
    },
});

export const { addProduct, removeProduct, changeStockState, modifyProductData } = productSlice.actions;
export default productSlice.reducer;