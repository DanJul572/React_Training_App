import { expect, it, describe } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';

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

        fireEvent.mouseDown(typeField);

        const listbox = within(screen.getByRole('listbox'));

        fireEvent.click(listbox.getByText('Food'));

        expect(typeField.nextElementSibling).toHaveAttribute(
            'value',
            'food'
        );
    });

    it('submit and clear form', async () => {
        render(<CreateProduct />);

        const cleartButton = screen.getByRole('button', {
            name: 'Clear',
        });
        const submitButton = screen.getByRole('button', {
            name: 'Submit',
        });

        expect(cleartButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.click(cleartButton);
        fireEvent.click(submitButton);
    });
});
