import {
    render,
    screen,
    fireEvent,
    waitForElement,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AppThemeProvider from './contexts/ThemeContext/ThemeProvider';
import App from './App';

describe('<App /> component', () => {
    const initialState = {
        users: {
            data: [],
            error: null,
        },
    };
    let store;

    beforeEach(() => {
        const mockStore = configureStore();
        store = mockStore(initialState);
    });

    test('should render correctly', () => {
        const { container } = render(
            <AppThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppThemeProvider>
        );
        expect(container).toMatchSnapshot();
        expect(screen.getByText(/user list/i)).toBeInTheDocument();
    });

    test('should display Add User CTA', () => {
        render(
            <AppThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppThemeProvider>
        );
        expect(screen.getByTestId('add-new-user')).toBeInTheDocument();
        expect(screen.getByText(/add user/i)).toBeInTheDocument();
    });

    test('should display user list table', () => {
        const mockStore = configureStore();
        initialState.users.data = [
            {
                name: 'Bird Ramsey',
                company: 'NIMON',
                email: 'birdramsey@nimon.com',
            },
            {
                name: 'Lillian Burgess',
                company: 'LUXURIA',
                email: 'lillianburgess@luxuria.com',
            },
        ];
        store = mockStore(initialState);
        render(
            <AppThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppThemeProvider>
        );
        expect(screen.getByTestId('user-list-table')).toBeInTheDocument();
        expect(screen.getByTestId('table-body').children.length).toEqual(2);
        expect(screen.getByText(/Lillian Burgess/i)).toBeInTheDocument();
        initialState.users.data = [];
    });

    test('should open add user modal on Add User CTA', () => {
        render(
            <AppThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppThemeProvider>
        );
        fireEvent.click(screen.getByTestId('add-new-user'));
        expect(screen.getByTestId('modal-wrapper')).toBeInTheDocument();
        expect(screen.getByTestId('modal-btn-close')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('btn-user-submit'));
    });

    test('should open edit user modal on click edit CTA', () => {
        const mockStore = configureStore();
        initialState.users.data = [
            {
                name: 'Bird Ramsey',
                company: 'NIMON',
                email: 'birdramsey@nimon.com',
            },
        ];
        store = mockStore(initialState);
        render(
            <AppThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppThemeProvider>
        );
        expect(screen.getByTestId('user-list-table')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('edit-row-item'));
        expect(screen.getByTestId('modal-wrapper')).toBeInTheDocument();
        expect(screen.getByText(/Update User Deatils/i)).toBeInTheDocument();
        expect(screen.getByTestId('modal-btn-close')).toBeInTheDocument();
        expect(screen.getByTestId('btn-user-submit')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('btn-user-submit'));
        initialState.users.data = [];
    });

    test('should remove the user from the user table on Delete CTA', async () => {
        const mockStore = configureStore();
        initialState.users.data = [
            {
                name: 'Bird Ramsey',
                company: 'NIMON',
                email: 'birdramsey@nimon.com',
            },
            {
                name: 'Lillian Burgess',
                company: 'LUXURIA',
                email: 'lillianburgess@luxuria.com',
            },
        ];
        store = mockStore(initialState);
        render(
            <AppThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppThemeProvider>
        );
        expect(screen.getByTestId('user-list-table')).toBeInTheDocument();
        expect(screen.getByTestId('table-body').children.length).toEqual(2);
        expect(screen.getByText(/Bird Ramsey/i)).toBeInTheDocument();
        fireEvent.click(screen.queryAllByTestId('delete-row-item')[0]);
    });
});
