import { userReducer, userActions } from './userSlice';
describe('user reducer actions', () => {
    const initialState = {
        data: [
            {
                name: 'User One',
                email: 'user.one@gamil.com',
                company: 'Test Company',
            },
        ],
        error: null,
    };

    test('should handle deleteUser action', () => {
        expect(
            userReducer(
                initialState,
                userActions.deleteUser({ email: 'user.one@gamil.com' })
            ).data.length
        ).toEqual(0);
    });

    test('should handle setErrors action', () => {
        expect(
            userReducer(
                initialState,
                userActions.setError({ errorCode: 'Invalid Request' })
            ).data.length
        ).toEqual(0);
    });

    test('should handle initial state', () => {
        expect(userReducer(undefined, { type: 'unknown' }).data.length).toEqual(
            0
        );
    });

    test('should handle initial state', () => {
        expect(
            userReducer(
                undefined,
                userActions.setUsers([
                    {
                        name: 'User One',
                        email: 'user.one@gamil.com',
                        company: 'Test Company',
                    },
                ])
            ).data.length
        ).toEqual(1);
    });

    it('should handle addUser action', () => {
        let state = userReducer(
            initialState,
            userActions.addUser({
                name: 'Test User',
                email: 'test.abc@gamil.com',
                company: 'Test Company',
            })
        );
        expect(state.data.length).toEqual(2);
    });

    it('should handle updateUser action', () => {
        let state = userReducer(
            initialState,
            userActions.updateUser({
                name: 'User Test',
                email: 'user.one@gamil.com',
                company: 'Test Company',
            })
        );
        expect(state.data[0].name).toEqual('User Test');
        userReducer(
            initialState,
            userActions.updateUser({
                name: 'User Test',
                email: 'user.one1@gamil.com',
                company: 'Test Company',
            })
        );
        expect(state.data[0].name).toEqual('User Test');
    });
});
