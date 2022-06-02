import { render, screen } from '@testing-library/react';
import Portal from './Portal';

describe('<Portal /> component', () => {
    test('should render correctly', () => {
        render(
            <Portal>
                <div>Hello</div>
            </Portal>
        );
        expect(screen.getByText(/hello/i)).toBeInTheDocument();
    });
});
