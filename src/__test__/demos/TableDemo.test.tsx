import { expect, it, describe } from 'vitest';
import {
    render,
    screen,
    fireEvent,
    act,
    waitFor,
    within,
} from '@testing-library/react';

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

    it('click add action', async () => {
        render(<TableDemo />);

        const addButton = screen.getByText(/add record/i);

        expect(addButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(addButton);
        });
    });

    it('change page action', async () => {
        render(<TableDemo />);

        const pageButton = screen.getByTitle('Go to next page');

        expect(pageButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(pageButton);
        });

        await waitFor(() => {
            expect(pageButton).toHaveAttribute('tabindex', '-1');
        });
    });

    it('filter action', async () => {
        render(<TableDemo />);

        const filterButton = screen.getByText('Filters');

        expect(filterButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(filterButton);
        });

        const filterValue = screen.getByPlaceholderText('Filter value');
        await waitFor(() => {
            expect(screen.getByText('Columns')).toBeInTheDocument();
            expect(screen.getByText('Operator')).toBeInTheDocument();
            expect(filterValue).toBeInTheDocument();
        });

        await act(async () => {
            fireEvent.change(filterValue, {
                target: { value: 'example value' },
            });
        });

        const loadIcon = screen.getByTestId('LoadIcon');

        expect(loadIcon).toBeInTheDocument();

        await waitFor(() => {
            expect(loadIcon).not.toBeInTheDocument();
        });
    });

    it('selection row', async () => {
        render(<TableDemo />);

        const firstRow = screen.getByRole('row', {
            name: /select row 1 jon snow 14 jon snow/i,
        });

        const firstCheck = within(firstRow).getByRole('checkbox', {
            name: /select row/i,
        });

        const checkAll = screen.getByRole('checkbox', {
            name: /select all rows/i,
        });

        expect(checkAll).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(firstCheck);
        });

        await waitFor(() => {
            expect(firstCheck).toHaveAttribute(
                'aria-label',
                'Unselect row'
            );
            expect(checkAll).toHaveAttribute(
                'aria-label',
                'Unselect all rows'
            );
        });

        await act(async () => {
            fireEvent.click(checkAll);
        });

        await waitFor(() => {
            expect(checkAll).toHaveAttribute(
                'aria-label',
                'Select all rows'
            );
        });

        await act(async () => {
            fireEvent.click(checkAll);
        });

        await waitFor(() => {
            expect(checkAll).toHaveAttribute(
                'aria-label',
                'Unselect all rows'
            );
        });
    });

    it('soting action', async () => {
        render(<TableDemo />);

        const sortButton = screen.getAllByTestId('ArrowUpwardIcon');

        expect(sortButton).toBeDefined();

        const firtSort = sortButton[0];

        await act(async () => {
            fireEvent.click(firtSort);
        });

        await waitFor(() => {
            expect(firtSort).not.toBeInTheDocument();
        });
    });
});
