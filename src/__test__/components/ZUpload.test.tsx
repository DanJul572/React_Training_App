// ZSelect.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vitest } from 'vitest';

import ZUpload from '@/components/ZUpload';
import { PropsType } from '@/components/ZUpload/types';

describe('ZUpload Component', () => {
    it('renders with value', () => {
        const mockFile = new File(['file content'], 'hello.txt', {
            type: 'text/plain',
        });
        const mockProps: PropsType = {
            label: 'Select',
            name: 'select',
            value: mockFile,
            onChange: vitest.fn(),
            onClear: vitest.fn(),
        };
        render(<ZUpload {...mockProps} />);
        expect(screen.getByTestId('zupload')).toBeInTheDocument();
    });

    it('renders without value', () => {
        const mockProps: PropsType = {
            label: 'Select',
            name: 'select',
            value: undefined,
            onChange: vitest.fn(),
            onClear: vitest.fn(),
        };
        render(<ZUpload {...mockProps} />);
        expect(screen.getByTestId('zupload')).toBeInTheDocument();
    });
});
