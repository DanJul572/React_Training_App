// ZSelect.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vitest } from 'vitest';

import ZSelect from '@/components/ZSelect';
import { PropsType } from '@/components/ZSelect/types';

describe('ZSelect Component', () => {
    it('renders with value', () => {
        const mockProps: PropsType = {
            label: 'Select',
            name: 'select',
            onChange: vitest.fn(),
            value: 'option1',
            options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
            ],
        };

        render(<ZSelect {...mockProps} />);

        expect(screen.getByTestId('zselect')).toBeInTheDocument();
    });

    it('renders without value', () => {
        const mockProps: PropsType = {
            label: 'Select',
            name: 'select',
            onChange: vitest.fn(),
            value: undefined,
            options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
            ],
        };

        render(<ZSelect {...mockProps} />);

        expect(screen.getByTestId('zselect')).toBeInTheDocument();
    });
});
