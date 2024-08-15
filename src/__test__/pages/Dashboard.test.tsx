import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Dashboard from '@/pages/Dashboard';

describe('Dashboard Page', () => {
    it('render component', () => {
        render(<Dashboard />);

        expect(screen.getByTestId('ztable')).toBeInTheDocument();
    });
});
