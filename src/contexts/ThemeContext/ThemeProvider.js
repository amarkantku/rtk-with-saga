import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

export const AppThemeProvider = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default AppThemeProvider;
