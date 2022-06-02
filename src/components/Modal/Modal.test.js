import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal /> component', () => {
    const defaultProps = {
        title: 'This is test modal title',
        footer: 'This is test footer',
        isOpen: true,
        handleClose: () => {},
    };
    test('should render correctly', () => {
        render(<Modal {...defaultProps}>Button Text</Modal>);
        expect(screen.getByTestId('modal-btn-close')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('modal-btn-close'));
    });

    test('should not render', () => {
        defaultProps.isOpen = false;
        render(<Modal {...defaultProps}>Button Text</Modal>);
    });
});
