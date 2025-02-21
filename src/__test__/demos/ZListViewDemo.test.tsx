import { expect, it, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import ZListViewDemo from '@/demos/ZListViewDemo';
import translator from '@/helpers/translator';

describe('ZLisetView Demo', () => {
    it('render component', async () => {
        render(<ZListViewDemo />);

        const tableContainer = screen.getByTestId('zlistview');
        expect(tableContainer).toBeInTheDocument();
    });

    it('click row action', async () => {
        render(<ZListViewDemo />);

        const editButton = screen.getAllByTestId('EditIcon');
        const deleteButton = screen.getAllByTestId('DeleteIcon');

        expect(editButton).toBeDefined();
        expect(deleteButton).toBeDefined();

        fireEvent.click(editButton[0]);
        fireEvent.click(deleteButton[0]);
    });

    it('click add action', async () => {
        render(<ZListViewDemo />);

        const addButton = screen.getByText(translator('add_record'));
        expect(addButton).toBeInTheDocument();

        fireEvent.click(addButton);
    });

    it('change page action', async () => {
        render(<ZListViewDemo />);

        const pageButton = screen.getByTestId('NavigateNextIcon');
        expect(pageButton).toBeInTheDocument();

        fireEvent.click(pageButton);
        expect(pageButton.parentElement).toBeDisabled();
    });
});
