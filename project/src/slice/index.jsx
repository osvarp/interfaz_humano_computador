import { configureStore } from '@reduxjs/toolkit';
import productSlice from "./productSlice.jsx"
import localUserSlice from './localUserSlice.jsx';
import allUsersSlice from './allUsersSlice.jsx';

export const store = configureStore({
    reducer: {
        product: productSlice, 
        localUser: localUserSlice,
        allUsers: allUsersSlice,
    },
})
