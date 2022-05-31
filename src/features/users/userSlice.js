import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
    },
    reducers: {
        updateUser: (state, payload) => {
            console.log(state, payload);
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
