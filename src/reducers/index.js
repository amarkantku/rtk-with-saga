/* istanbul ignore file */
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '../features/users/userSlice';

export default combineReducers({
    users: userReducer,
});
