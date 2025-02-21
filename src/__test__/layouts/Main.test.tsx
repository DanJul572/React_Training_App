import { expect, it, describe, vitest } from 'vitest';
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import translator from '@/helpers/translator';

import Main from '@/layouts/Main';

vitest.mock('react-router-dom', () => ({
    useNavigate: vitest.fn(() => vitest.fn()),
    useLocation: vitest.fn(() => ({
        pathname: '/dashboard',
    })),
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

    /* uncomment when Tree Menu is have nested menu */
    /*
    it('coallapse nested menu', async () => {
        render(
            <Main>
                <h1>Hello</h1>
            </Main>
        );

        const nestedMenu = screen.getAllByTestId('FolderIcon');
        expect(nestedMenu).toBeDefined();

        fireEvent.click(nestedMenu[0]);
        expect(screen.getAllByTestId('FolderOpenIcon')).toBeDefined();
    });
    */

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
            fireEvent.click(screen.getByTestId('FadeItemLogout'));
        });

        const loaderElement = screen.getByText(
            `${translator('loading')}...`
        );
        await waitFor(() => {
            expect(loaderElement).toBeInTheDocument();
        });
    });

    it('on change page', async () => {
        render(
            <Main>
                <h1>Hello</h1>
            </Main>
        );

        const dashboardItem = screen.getByText(translator('dashboard'));
        expect(dashboardItem).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(dashboardItem);
        });

        await waitFor(() => {
            expect(useNavigate).toBeCalled();
        });
    });
});
