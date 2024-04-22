import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "asterion_0":{
        id: "asterion_0",
        userName: "asterion",
        productName: "brownie",
        price: 200,
        profileImage: "/public/profileImages/asterion.jpg",
        productImage: "/public/productImages/asterion_brownie.png",
        productDescription: "Rico brownie para pasar la tarde",
        inStock: true,
    }, 
    "jeronimo_0":{
        id:"jeronimo_0",
        userName: "jeronimo",
        productName: "durazno",
        price: 8000,
        profileImage: "/public/profileImages/jeronimo.jpg",
        productImage: "/public/productImages/jeronimo_durazno.png",
        productDescription: "Un durazno. Esta bueno.",
        inStock: true,
    },
    "doña_florinda_0":{
        id: "doña_florinda_0",
        userName: "doña_florinda",
        productName: "pato de hule",
        price: 4000,
        profileImage: "/public/profileImages/dona_florinda.jpg",
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
    },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;