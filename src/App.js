import UserList from './features/users/pages/UserList';
import data from './data/users.json';
import { AppContainer } from './styles/styled';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
    return (
        <AppContainer>
            <GlobalStyle />
            <UserList userData={data} />;
        </AppContainer>
    );
};

export default App;
