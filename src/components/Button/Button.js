import { StyledButton } from './Button.styled';

const Button = ({ children, ...restProps }) => {
    return <StyledButton {...restProps}>{children}</StyledButton>;
};

Button.defaultProps = {
    theme: {
        secondary: '#ccc',
        overlay: '#ccc',
        colors: {
            black: '#000000',
        },
    },
};
export default Button;
