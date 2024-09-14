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

    it('change and clear image value', () => {
        render(<CreateProduct />);

        const imageField = screen.getByTestId('UploadIcon')
            .nextSibling as HTMLInputElement;
        expect(imageField).toBeInTheDocument();

        if (imageField) {
            const file = new File(['hello'], 'hello.png', {
                type: 'image/png',
            });
            fireEvent.change(imageField, {
                target: { files: [file] },
            });
        }

        const clearIcon = screen.getByTestId('ClearIcon');
        expect(clearIcon).toBeInTheDocument();

        fireEvent.click(clearIcon);
        if (imageField) {
            expect(imageField.value).toBe('');
        }
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
