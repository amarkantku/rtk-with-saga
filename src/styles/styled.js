import styled from 'styled-components';

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Col = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    scroll-behavior: smooth;
`;
