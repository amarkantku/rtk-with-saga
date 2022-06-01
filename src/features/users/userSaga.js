import { delay, put, takeLatest } from 'redux-saga/effects';
import { UserActions } from '../../constant';
import { userActions } from './userSlice';
import userData from '../../data/users.json';

function* fetchUserSaga(action) {
    try {
        yield delay(500);
        yield put(userActions.setUsers(userData));
    } catch (error) {
        yield put(userActions.setError(error));
    }
}

export default function* userSaga() {
    yield takeLatest(UserActions.FETCH_USER, fetchUserSaga);
}
