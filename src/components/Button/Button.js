import { StyledButton } from './Button.styled';

const Button = ({ children, ...restProps }) => {
    return <StyledButton {...restProps}>{children}</StyledButton>;
};
export default Button;
