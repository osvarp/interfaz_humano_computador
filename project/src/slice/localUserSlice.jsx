/*
Mi idea es usar este slice para guardar informacion del usuario que esta logeado ( como la imagen del perfil )
user -> 
 * profile Image
 * preferences
 * products
*/

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    userName : "asterion",
};

export const localUserSlice = createSlice({
    name : "localUser",
    initialState,
    reducers : {
        loginUser: ( state, action ) => {
            state.userName = action.payload;
        },
        logoutUser: ( state ) => {
            state.userName = "";
        },
    },
});

export const { loginUser, logoutUser } = localUserSlice.actions;
export default localUserSlice.reducer;