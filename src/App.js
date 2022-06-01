import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from './features/users/pages/UserList';
import { AppWrapper } from './styles/styled';
import GlobalStyle from './theme/GlobalStyle';
import { getUsers } from './features/users/userSlice';

const App = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.data);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <AppWrapper data-testid="app-main">
            <GlobalStyle />
            <UserList userData={users} />
        </AppWrapper>
    );
};

export default App;
