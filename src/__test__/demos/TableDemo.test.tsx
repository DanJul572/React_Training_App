import { expect, it, describe } from 'vitest';
import {
    render,
    screen,
    fireEvent,
    act,
    waitFor,
    within,
} from '@testing-library/react';

import ZTableComponent from '../../demos/ZTableComponent';

describe('Table Demo', () => {
    it('render component', async () => {
        render(<ZTableComponent />);

        const tableContainer = screen.getByTestId('ztable');

        expect(tableContainer).toBeInTheDocument();
    });

    it('click row action', async () => {
        render(<ZTableComponent />);

        const firstRow = screen.getByRole('row', {
            name: /select row 1 jon snow 14 jon snow/i,
        });

        const editButton = within(firstRow).getByTestId('EditIcon');

        const deleteButton = within(firstRow).getByTestId('DeleteIcon');

        expect(editButton).toBeDefined();
        expect(deleteButton).toBeDefined();

        await act(async () => {
            fireEvent.click(editButton);
        });

        await act(async () => {
            fireEvent.click(deleteButton);
        });
    });

    it('click add action', async () => {
        render(<ZTableComponent />);

        const addButton = screen.getByTestId('AddIcon');

        expect(addButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(addButton);
        });
    });

    it('change page action', async () => {
        render(<ZTableComponent />);

        const pageButton = screen.getByTestId('KeyboardArrowRightIcon');

        expect(pageButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(pageButton);
        });

        await waitFor(() => {
            expect(pageButton.parentElement).toBeDisabled();
        });
    });

    it('filter action', async () => {
        render(<ZTableComponent />);

        const filterButton = screen.getByTestId('FilterListIcon');

        expect(filterButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(filterButton);
        });

        const filterValue = screen.getByPlaceholderText(/filter value/i);

        await waitFor(() => {
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
        render(<ZTableComponent />);

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
        render(<ZTableComponent />);

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
