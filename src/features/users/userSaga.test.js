import { fetchUserSaga } from './userSaga';

describe('User saga test', () => {
    test('Test user saga', () => {
        const saga = fetchUserSaga({});
        expect(saga.next().done).toBe(false);
        expect(saga.next().done).toBe(false);
        saga.throw(new Error('Error!'));
        expect(saga.next().done).toBe(true);
    });
});
