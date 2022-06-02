import { fireEvent, render, screen } from '@testing-library/react';
import Table from './Table';

describe('<Table /> component', () => {
    const defaultProps = {
        id: 'table',
        data: [
            {
                name: 'Bird Ramsey',
                company: 'NIMON',
                email: 'birdramsey@nimon.com',
            },
            {
                name: 'Lillian Burgess',
                company: 'LUXURIA',
                email: 'lillianburgess@luxuria.com',
            },
        ],
        caption: '',
        isReadonly: false,
        handleClick: () => {},
    };
    test('should render correctly with props', () => {
        render(<Table {...defaultProps} />);
    });
    test('should render correctly', () => {
        render(<Table />);
    });
});
