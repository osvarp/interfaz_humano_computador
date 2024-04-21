import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    0:{
        id: 0,
        userName: "asterion",
        productName: "brownie",
        price: 200,
        profileImage: "/public/profileImages/asterion.jpg",
        productImage: "/public/productImages/asterion_brownie.png",
        productDescription: "Rico brownie para pasar la tarde",
    }, 
    1:{
        id:1,
        userName: "jeronimo",
        productName: "durazno",
        price: 8000,
        profileImage: "/public/profileImages/jeronimo.jpg",
        productImage: "/public/productImages/jeronimo_durazno.png",
        productDescription: "Un durazno. Esta bueno.",
    },
    2:{
        id: 2,
        userName: "doña_florinda",
        productName: "pato de hule",
        price: 4000,
        profileImage: "/public/profileImages/dona_florinda.jpg",
        productImage: "/public/productImages/dona_florinda_patoDeHule.jpeg",
        productDescription: "Debugea como los dioses usando la renombrada técnica del ‘rubber duck’.",
    }
};

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{
        addProduct : ( state, product ) => {
            state[product.id] = product;
        },
        removeProduct : ( state, product ) => {
            delete state[product.id];
        },
    },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;