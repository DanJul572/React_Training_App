import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import Example from '@/pages/Example';

describe('Example Page', () => {
    it('render component', () => {
        render(<Example />);

        const content = screen.getByRole('heading', {
            name: /example page/i,
        });

        expect(content).toBeInTheDocument();
    });
});
