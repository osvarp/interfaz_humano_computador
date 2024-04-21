import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

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