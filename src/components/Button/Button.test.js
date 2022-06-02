import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button /> component', () => {
    test('should render correctly without props', () => {
        render(<Button>Button Text</Button>);
        expect(screen.getByText(/Button Text/i)).toBeInTheDocument();
    });

    test('should render correctly with props', () => {
        render(
            <Button height={40} width={100}>
                Button Text
            </Button>
        );
        expect(screen.getByText(/Button Text/i)).toBeInTheDocument();
    });
});
