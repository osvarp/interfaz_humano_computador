import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    asterion : {
        userName : "asterion",
        profileImage: "/public/profileImages/asterion.jpg",
        description: "Es verdad que no salgo de mi casa, pero también es verdad que sus puertas (cuyo número es infinito) están abiertas día y noche a los hombres y también a los animales.",
        phoneNumber: "1025402465",
        sellAccount: true,
    },
    jeronimo : {
        userName: "jeronimo",
        profileImage: "/public/profileImages/jeronimo.jpg",
        description : "Soy jeronimo.",
        phoneNumber: "178556565",
        sellAccount: true,
    },
    doña_florinda : {
        userName: "doña_florinda",
        profileImage: "/public/profileImages/dona_florinda.jpg",
        description: "no te metas con esa chusma!",
        phoneNumber: "10534563645",
        sellAccount: true,
    }
};

export const allUsersSlice = createSlice({
    name : 'allUsers',
    initialState,
    reducers:{
        addUser : ( state, user ) => {
            state[user.id] = user;
        },
    },
});

export const { addUser } = allUsersSlice.actions;
export default allUsersSlice.reducer;