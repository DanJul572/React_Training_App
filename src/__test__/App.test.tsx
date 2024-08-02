import { expect, it, describe } from 'vitest';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';

import App from '../App';

describe('App', () => {
    it('render component', () => {
        render(<App />);

        expect(screen.getByTestId('content')).toBeInTheDocument();
    });

    it('coallapse nested menu', async () => {
        render(<App />);

        const nestedMenu = screen.getAllByTestId('FolderIcon');

        expect(nestedMenu).toBeDefined();

        await act(async () => {
            fireEvent.click(nestedMenu[0]);
        });

        await waitFor(() => {
            expect(screen.getAllByTestId('FolderOpenIcon')).toBeDefined();
        });
    });
});
