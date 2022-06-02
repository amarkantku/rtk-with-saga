import { memo } from 'react';
import Portal from '../../portals/Portal';
import CloseIcon from '../../icons/Close';

import {
    ModalBlock,
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
} from './Modal.styled';

const Modal = ({ title, footer, children, isOpen, handleClose }) => {
    if (!isOpen) return null;
    return (
        <Portal data-testid={'modal-portal'} id="modal-portal">
            <ModalBlock data-testid={'modal-wrapper'}>
                <ModalOverlay data-testid={'modal-overlay'} />
                <ModalContainer data-testid={'modal-container'}>
                    <ModalHeader data-testid={'modal-header'}>
                        <ModalTitle data-testid={'modal-title'}>
                            {title}
                        </ModalTitle>
                        <ModalClose
                            onClick={handleClose}
                            data-testid={'modal-btn-close'}
                        >
                            <CloseIcon data-testid={'modal-close-icon'} />
                        </ModalClose>
                    </ModalHeader>
                    <ModalBody data-testid={'modal-body'}>{children}</ModalBody>
                    {footer ? (
                        <ModalFooter data-testid={'modal-footer'}>
                            {footer}
                        </ModalFooter>
                    ) : null}
                </ModalContainer>
            </ModalBlock>
        </Portal>
    );
};

export default memo(Modal);
