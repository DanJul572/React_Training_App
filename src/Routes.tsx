import { createBrowserRouter } from 'react-router-dom';

import Main from './layouts/Main';

import App from './App';
import Dashboard from './pages/Dashboard';
import CreateProduct from './pages/Product/CreateProduct';

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
        path: '/dashboard',
        element: (
            <Main>
                <Dashboard />
            </Main>
        ),
    },
    {
        path: '/product/create',
        element: (
            <Main>
                <CreateProduct />
            </Main>
        ),
    },
]);

export default router;
