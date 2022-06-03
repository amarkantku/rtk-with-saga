import { fetchUserSaga, userSaga } from './userSaga';

describe('User saga test', () => {
    test('Test user saga', () => {
        const saga = fetchUserSaga({});
        expect(saga.next().done).toBe(false);
        expect(saga.next().done).toBe(false);
        expect(saga.next().done).toBe(true);
    });
});
