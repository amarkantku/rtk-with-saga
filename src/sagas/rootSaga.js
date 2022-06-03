/* istanbul ignore file */
import { all, fork } from 'redux-saga/effects';
import userSaga from '../features/users/userSaga';

export default function* rootSaga() {
    yield all([fork(userSaga)]);
}
