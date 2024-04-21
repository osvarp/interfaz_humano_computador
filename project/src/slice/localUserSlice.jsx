/*
Mi idea es usar este slice para guardar informacion del usuario que esta logeado ( como la imagen del perfil )
user -> 
 * profile Image
 * preferences
 * products
*/

import { createSlice } from '@reduxjs/toolkit';

const neutralProfileImage = "";

const initialState = {
    userName : "",
    profileImage : neutralProfileImage,
    description : "",
    sellAccount : false,
    phoneNumber : "",
};

export const localUserSlice = createSlice({
    name : "localUser",
    initialState,
    reducers : {
        loginUser: ( state, user ) => {
            state.userName = user.userName;
            state.profileImage = user.profileImage;
            state.description = user.description;
            state.sellAccount = user.sellAccount;
            state.phoneNumber = user.phoneNumber;
        },
        logoutUser: ( state ) => {
            state.userName = "";
            state.profileImage = neutralProfileImage;
            state.description = "";
            state.sellAccount = false;
            state.phoneNumber = "";
        },
    },
});

export const { loginUser, logoutUser } = localUserSlice.actions;
export default localUserSlice.reducer;