import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    asterion : {
        userName : "asterion",
        profileImage: "/public/profileImages/asterion.jpg",
        description: "Es verdad que no salgo de mi casa, pero también es verdad que sus puertas (cuyo número es infinito) están abiertas día y noche a los hombres y también a los animales.",
        phoneNumber: "1025402465",
        sellAccount: true,
        associatedProducts: ["asterion_0"],
        nextId: 1,
    },
    jeronimo : {
        userName: "jeronimo",
        profileImage: "/public/profileImages/jeronimo.jpg",
        description : "Soy jeronimo.",
        phoneNumber: "178556565",
        sellAccount: true,
        associatedProducts: ["jeronimo_0"],
        nextId: 1,
    },
    doña_florinda : {
        userName: "doña_florinda",
        profileImage: "/public/profileImages/dona_florinda.jpg",
        description: "no te metas con esa chusma!",
        phoneNumber: "10534563645",
        sellAccount: true,
        associatedProducts: ["doña_florinda_0"],
        nextId: 1,
    }
};

export const allUsersSlice = createSlice({
    name : 'allUsers',
    initialState,
    reducers:{
        addUser : ( state, user ) => {
            state[user.id] = {...user,nextId:0};
        },
        addAssociatedProduct : ( state, action ) => {
            state[action.payload.user].associatedProducts.push( action.payload.product );
            state[action.payload.user].nextId += 1;
        },
        removeAssociatedProduct : ( state, action ) => {
            const index = state[action.payload.user].associatedProducts.indexOf( action.product );
            if ( index > -1 ) {
                state[action.payload.user].associatedProducts.splice( index, 1 );
            }
        },
        changePhoneNumber : ( state, action ) => {
            state[action.payload.id].phoneNumber = action.payload.value;
        }
    },
});

export const { addUser, addAssociatedProduct, removeAssociatedProduct, changePhoneNumber } = allUsersSlice.actions;
export default allUsersSlice.reducer;