import { expect, it, describe, vitest } from 'vitest';
import {
    fireEvent,
    render,
    screen,
    waitFor,
    within,
} from '@testing-library/react';

import request from '@/helpers/request';
import translator from '@/helpers/translator';

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

    it('clear form', async () => {
        render(<CreateProduct />);

        const cleartButton = screen.getByRole('button', {
            name: translator('clear'),
        });
        expect(cleartButton).toBeInTheDocument();

        fireEvent.click(cleartButton);
    });

    it('submit form with empty body', async () => {
        render(<CreateProduct />);

        const submitButton = screen.getByRole('button', {
            name: translator('submit'),
        });
        expect(submitButton).toBeInTheDocument();

        request.post = vitest.fn().mockRejectedValueOnce({
            response: {
                data: {
                    message: [
                        'label should not be empty',
                        'image must be base64 encoded',
                        'stock must be a number conforming to the specified constraints',
                        'stock should not be empty',
                        'type must be a string',
                        'type should not be empty',
                    ],
                    error: 'Bad Request',
                    statusCode: 400,
                },
            },
        });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(
                screen.getByText('label should not be empty')
            ).toBeInTheDocument();
        });
    });

    it('submit form with valid payloads', async () => {
        render(<CreateProduct />);

        const submitButton = screen.getByRole('button', {
            name: translator('submit'),
        });
        expect(submitButton).toBeInTheDocument();

        request.post = vitest.fn().mockResolvedValueOnce({
            response: {
                data: {
                    label: 'Soap',
                    type: 'Tool',
                    stock: 3000,
                },
            },
        });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(
                screen.getByText('Product has been created.')
            ).toBeInTheDocument();
        });
    });
});
