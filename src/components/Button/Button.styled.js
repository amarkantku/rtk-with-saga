import styled from 'styled-components';
import Button from '@mui/material/Button';

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
        return 'auto';
    }};
    border-radius: 2px;
    font-weight: 700;
    padding: 5px;
    border: 0;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 99;
    background: none;
    border: ${(props) => `2px solid ${props.theme.primary}`};
    color: ${(props) => props.theme.colors.black};
    :hover {
        background: ${(props) => props.theme.primary};
    }
`;
