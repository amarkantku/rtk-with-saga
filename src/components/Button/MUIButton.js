/* istanbul ignore file */
import React from 'react';
import styled from 'styled-components';
// import Button from '@mui/material/Button';
import Button from './Button';

export default styled(({ color, children, ...otherProps }) => {
    return <Button {...otherProps}>{children}</Button>;
})`
    && {
        color: ${(props) => props.color};
        background-color: orange;

        &:hover {
            color: yellow;
            background-color: purple;
        }
    }
`;
