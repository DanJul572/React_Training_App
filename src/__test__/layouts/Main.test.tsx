import { expect, it, describe, vitest } from 'vitest';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';

import Main from '../../layouts/Main';
import { useNavigate } from 'react-router-dom';

vitest.mock('react-router-dom', () => ({
    useNavigate: vitest.fn(() => vitest.fn()), // Adjust based on your mock setup
}));

describe('Main Layout', () => {
    it('render component', () => {
        render(
            <Main>
                <h1>Hello</h1>
            </Main>
        );

        expect(screen.getByTestId('logo')).toBeInTheDocument();
    });

    it('coallapse nested menu', async () => {
        render(
            <Main>
                <h1>Hello</h1>
            </Main>
        );

        const nestedMenu = screen.getAllByTestId('FolderIcon');

        expect(nestedMenu).toBeDefined();

        await act(async () => {
            fireEvent.click(nestedMenu[0]);
        });

        await waitFor(() => {
            expect(screen.getAllByTestId('FolderOpenIcon')).toBeDefined();
        });
    });

    it('show and hide FadeMenu', async () => {
        render(
            <Main>
                <h1>Hello</h1>
            </Main>
        );

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

    it('on change page', async () => {
        render(
            <Main>
                <h1>Hello</h1>
            </Main>
        );

        const dashboardItem = screen.getByText(/dashboard/i);
        expect(dashboardItem).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(dashboardItem);
        });

        await waitFor(() => {
            expect(useNavigate).toBeCalled();
        });
    });
});
