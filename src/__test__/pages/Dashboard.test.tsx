import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import translator from '@/helpers/translator';

import Dashboard from '@/pages/Dashboard';

describe('Dashboard Page', () => {
    it('render component', () => {
        render(<Dashboard />);
        const cardUser = screen.getAllByText(translator('user'));
        expect(cardUser[0]).toBeInTheDocument();
    });
});
