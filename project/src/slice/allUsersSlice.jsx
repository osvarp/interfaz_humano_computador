import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    asterion : {
        username : "asterion",
        name : "",
        surname : "",
        email : "asterion@gmil.com",
        profileImage: "/public/profileImages/asterion.jpg",
        description: "Es verdad que no salgo de mi casa, pero también es verdad que sus puertas (cuyo número es infinito) están abiertas día y noche a los hombres y también a los animales.",
        phoneNumber: "1025402465",
        seller: true,
        associatedProducts: ["asterion_0"],
        nextId: 1,
    },
    jeronimo : {
        username: "jeronimo",
        name:"jeronimo",
        surname:"",
        email : "jeronimo@gmil.com",
        profileImage: "/public/profileImages/jeronimo.jpg",
        description : "Soy jeronimo.",
        phoneNumber: "178556565",
        seller: true,
        associatedProducts: ["jeronimo_0"],
        nextId: 1,
    },
    doña_florinda : {
        username: "doña_florinda",
        name:"doña",
        surname:"florinda",
        email : "doñaFlora@gmil.com",
        profileImage: "/public/profileImages/dona_florinda.jpg",
        description: "no te metas con esa chusma!",
        phoneNumber: "10534563645",
        seller: true,
        associatedProducts: ["doña_florinda_0"],
        nextId: 1,
    }
};

export const allUsersSlice = createSlice({
    name : 'allUsers',
    initialState,
    reducers:{
        addUser : ( state, action ) => {
            state[action.payload.username] = {...action.payload,nextId:0, description:"", profileImage:"defaultUserPicture.png", associatedProducts:[]};
        },
        addAssociatedProduct : ( state, action ) => {
            state[action.payload.user].associatedProducts.push( action.payload.product );
            state[action.payload.user].nextId += 1;
        },
        removeAssociatedProduct : ( state, action ) => {
            console.log(action.payload.product);
            const index = state[action.payload.user].associatedProducts.indexOf( action.payload.product );
            console.log( index );
            if ( index > -1 ) {
                state[action.payload.user].associatedProducts.splice( index, 1 );
            }
        },
        modifyUserData : ( state, action ) => {
            Object.keys( action.payload ).map( (key) => {
                state[action.payload.username][key] = action.payload[key];
            } );
        }
    },
});

export const { addUser, addAssociatedProduct, removeAssociatedProduct, modifyUserData } = allUsersSlice.actions;
export default allUsersSlice.reducer;