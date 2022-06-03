import { delay, put, takeLatest } from 'redux-saga/effects';
import { userActions, UserActionTypes } from './userSlice';
import userData from '../../data/users.json';

export const fetchUserSaga = function* (action) {
    try {
        yield delay(500);
        yield put(userActions.setUsers(userData));
    } catch (error) {
        /* istanbul ignore next */
        yield put(userActions.setError(error));
    }
};

 /* istanbul ignore next */
export default function* userSaga() {
    yield takeLatest(UserActionTypes.FETCH_USER, fetchUserSaga);
}
