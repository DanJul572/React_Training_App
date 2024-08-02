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

    it('show and hide FadeAction', async () => {
        render(<App />);

        const fadeButton = screen.getByTestId('FadeMenuButton');

        expect(fadeButton).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(fadeButton);
        });

        const fadeMenu = screen.getByTestId('FadeMenu');

        await waitFor(() => {
            expect(fadeMenu).toBeInTheDocument();
        });

        await act(async () => {
            fireEvent.click(screen.getByTestId('FadeItemMyAccount'));
        });

        await waitFor(() => {
            expect(fadeMenu).not.toBeInTheDocument();
        });
    });
});
