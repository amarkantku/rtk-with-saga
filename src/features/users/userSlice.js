import { createSlice, createAction } from '@reduxjs/toolkit';
import { UserActions } from '../../constant';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        error: null,
    },
    reducers: {
        setUsers: (state, action) => {
            return {
                ...state,
                error: null,
                data: action.payload,
            };
        },
        updateUser: (state, action) => {
            return {
                ...state,
                data: state.data.map((item) =>
                    item.email === action.payload.email ? action.payload : item
                ),
            };
        },
        deleteUser: (state, action) => {
            return {
                ...state,
                data: state.data.filter(
                    (item) => item.email !== action.payload.email
                ),
            };
        },
        addUser: (state, action) => {
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        },
        setError: (state, action) => {
            return {
                ...state,
                data: [],
                error: action.payload,
            };
        },
    },
});

export const userActions = userSlice.actions;
export const getUsers = createAction(UserActions.FETCH_USER);
export const userReducer = userSlice.reducer;
