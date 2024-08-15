import { createBrowserRouter } from 'react-router-dom';

import Main from './layouts/Main';

import Dashboard from './pages/Dashboard';
import Example from './pages/Example';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Main>
                <Example />
            </Main>
        ),
    },
    {
        path: '/dashboard',
        element: (
            <Main>
                <Dashboard />,
            </Main>
        ),
    },
]);

export default router;
