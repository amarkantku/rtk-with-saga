import styled from 'styled-components';
import { memo } from 'react';

export const StyledButton = styled.button`
    height: ${(props) => {
        if (props.height) {
            return `${props.height}px`;
        }
        return '40px';
    }};
    width: ${(props) => {
        if (props.width) {
            return `${props.width}px`;
        }
        return '100%';
    }};
    border-radius: ${(props) => {
        switch (props.shape) {
            case 'rounded':
                return '50%';
            case 'small':
                return '5px';
            default:
                return '0px';
        }
    }};
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.secondary};
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    z-index: 99;
    :hover {
        background: #273746;
    }
`;

const Button = ({ children, ...restProps }) => {
    return <StyledButton {...restProps}>{children}</StyledButton>;
};
export default memo(Button);
