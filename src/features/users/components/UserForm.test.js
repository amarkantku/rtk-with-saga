import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';

describe('<UserForm /> component', () => {
    test('should render correctly', () => {
        render(<UserForm />);
        expect(screen.getByTestId('user-form-wrapper')).toBeInTheDocument();
    });

    test('should change the value of name input filed', () => {
        const { getByLabelText } = render(<UserForm />);
        const input = getByLabelText('user-name-input');
        fireEvent.change(input, { target: { value: 'Amarkant Kumar' } });
        expect(input.value).toBe('Amarkant Kumar');
    });

    test('should change the value of email input filed', () => {
        const { getByTestId } = render(<UserForm />);
        const input = getByTestId('user-email-input');
        fireEvent.change(input, { target: { value: 'test.user@test.com' } });
        expect(input.value).toBe('test.user@test.com');
    });

    test('should exist Save button', () => {
        const { getByTestId } = render(<UserForm />);
        const button = getByTestId('btn-user-submit');
        expect(button.innerHTML).toBe('Save');
    });
});
