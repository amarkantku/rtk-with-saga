import { takeLatest } from 'redux-saga/effects';

function* testUserSaga(action) {
    try {
        yield 1;
        console.log(action);
    } catch (error) {
        yield error;
        console.log('Failed to fetch', error);
    }
}

export default function* userSaga() {
    yield takeLatest('TEST_USER_SAGA', testUserSaga);
}
