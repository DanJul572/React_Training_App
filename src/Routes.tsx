import { createBrowserRouter } from 'react-router-dom';

import Main from './layouts/Main';

import Dashboard from './pages/Dashboard';
import Example from './pages/Example';

import App from './App';
import CreateProduct from './pages/CreateProduct';

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
                <Dashboard />
            </Main>
        ),
    },
    {
        path: '/create-product',
        element: (
            <Main>
                <CreateProduct />
            </Main>
        ),
    },
]);

export default router;
