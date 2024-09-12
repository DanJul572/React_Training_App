import { expect, it, describe } from 'vitest';
import {
    render,
    screen,
    fireEvent,
    act,
    waitFor,
} from '@testing-library/react';
import translator from '@/helpers/translator';

import ZTableDemo from '@/demos/ZTableDemo';

describe('Table Demo', () => {
    it('render component', async () => {
        render(<ZTableDemo />);

        const tableContainer = screen.getByTestId('ztable');

        expect(tableContainer).toBeInTheDocument();
    });

    it('click row action', async () => {
        render(<ZTableDemo />);

        const editButton = screen.getAllByTestId('EditIcon');
        const deleteButton = screen.getAllByTestId('DeleteIcon');

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
        render(<ZTableDemo />);

        const addButton = screen.getByTestId('AddIcon');

        expect(addButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(addButton);
        });
    });

    it('change page action', async () => {
        render(<ZTableDemo />);

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
        render(<ZTableDemo />);

        const filterButton = screen.getByTestId('FilterListIcon');

        expect(filterButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(filterButton);
        });

        const filterValue = screen.getByPlaceholderText(
            translator('filter_value')
        );

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
        render(<ZTableDemo />);

        const checks = screen.getAllByTestId('CheckBoxOutlineBlankIcon');
        const slectAll = checks[0].previousElementSibling;
        const selectFirst = checks[1].previousElementSibling;

        expect(slectAll).toBeInTheDocument();
        expect(selectFirst).toBeInTheDocument();

        if (selectFirst && slectAll) {
            await act(async () => {
                fireEvent.click(selectFirst);
            });

            await waitFor(() => {
                expect(selectFirst).toHaveAttribute(
                    'aria-label',
                    'Unselect row'
                );
                expect(slectAll).toHaveAttribute(
                    'aria-label',
                    'Unselect all rows'
                );
            });

            await act(async () => {
                fireEvent.click(slectAll);
            });

            await waitFor(() => {
                expect(slectAll).toHaveAttribute(
                    'aria-label',
                    'Select all rows'
                );
            });

            await act(async () => {
                fireEvent.click(slectAll);
            });

            await waitFor(() => {
                expect(slectAll).toHaveAttribute(
                    'aria-label',
                    'Unselect all rows'
                );
            });
        }
    });

    it('soting action', async () => {
        render(<ZTableDemo />);

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
