import { expect, it, describe } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';

import TableDemo from '../../demos/TableDemo';

describe('Table Demo', () => {
    it('render component', async () => {
        render(<TableDemo />);

        const tableContainer = screen.getByTestId('ztable');

        expect(tableContainer).toBeInTheDocument();
    });

    it('click row action', async () => {
        render(<TableDemo />);

        const editButton = screen.getAllByTestId('ztable_edit_button');
        const deleteButton = screen.getAllByTestId('ztable_delete_button');

        expect(editButton).toBeDefined();
        expect(deleteButton).toBeDefined();

        await act(async () => {
            fireEvent.click(editButton[0]);
        });

        await act(async () => {
            fireEvent.click(deleteButton[0]);
        });
    });
});
