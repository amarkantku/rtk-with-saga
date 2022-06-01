import { delay, put, takeLatest } from 'redux-saga/effects';
import { UserActions } from '../../constant';
import { userActions } from './userSlice';
import userData from '../../data/users.json';

function* fetchUserSaga(action) {
    try {
        yield delay(500);
        yield put(userActions.setUsers(userData));
        console.log('@test in saga', action, userData);
    } catch (error) {
        yield error;
        console.log('Failed to fetch', error);
    }
}

export default function* userSaga() {
    yield takeLatest(UserActions.FETCH_USER, fetchUserSaga);
}
