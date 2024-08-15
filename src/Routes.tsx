import { createBrowserRouter } from 'react-router-dom';

import Main from './layouts/Main';

import Dashboard from './pages/Dashboard';
import Example from './pages/Example';

import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Main>
                <App />
            </Main>
        ),
    },
    {
        path: '/example',
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
