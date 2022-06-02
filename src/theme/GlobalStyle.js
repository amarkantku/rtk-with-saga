import { createGlobalStyle, withTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        height: 100%;
        width: 100%;
        line-height: 1.5;
        
        background: ${
            /* istanbul ignore next */
            (p) => p.theme.body
        };
        font-family: "Roboto", sans-serif;
    }
`;

export default withTheme(GlobalStyle);
