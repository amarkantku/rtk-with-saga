import styled from 'styled-components';

export const ModalBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    z-index: 400;
    padding: 0.4rem;
    overflow: hidden;
    opacity: 1;
`;

export const ModalOverlay = styled.a`
    background: ${(p) => p.theme.overlay};
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
`;

export const ModalContainer = styled.div`
    background: ${(p) => p.theme.body};
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 0.5rem;
    width: 100%;
    z-index: 1;
    box-shadow: 0 0.2rem 0.5rem #c2c2c2;
`;

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 10px;
`;

export const ModalTitle = styled.span`
    font-size: 24px;
    font-weight: 500;
`;

export const ModalClose = styled.a`
    cursor: pointer;
`;

export const ModalBody = styled.div`
    overflow-y: auto;
    padding: 5px 10px 20px 10px;
    position: relative;
    transform: translateY(1);
`;

export const ModalFooter = styled.div`
    padding: 10px 0px;
    text-align: right;
`;
