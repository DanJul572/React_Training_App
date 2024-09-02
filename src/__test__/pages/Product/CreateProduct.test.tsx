import { expect, it, describe } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';

import CreateProduct from '@/pages/Product/CreateProduct';

describe('CreateProduct Page', () => {
    it('render component', () => {
        render(<CreateProduct />);
        expect(screen.getByText('Create Product')).toBeInTheDocument();
    });

    it('change Type Field value', async () => {
        render(<CreateProduct />);

        const typeField = screen.getByRole('combobox');
        expect(typeField).toBeInTheDocument();

        await act(async () => {
            fireEvent.select(typeField, 'food');
        });
    });
});
