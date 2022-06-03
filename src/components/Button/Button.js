import { StyledButton } from './Button.styled';

const Button = ({ children, ...restProps }) => {
    return <StyledButton {...restProps}>{children}</StyledButton>;
};

Button.defaultProps = {
    theme: {
        secondary: '',
        overlay: '',
        colors: {
            black: '',
        },
    },
};
export default Button;
