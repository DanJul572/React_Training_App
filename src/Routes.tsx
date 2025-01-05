import { createBrowserRouter } from 'react-router-dom';

import Main from './layouts/Main';

import App from './App';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/Product/ProductList';
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
        path: '/product',
        element: (
            <Main>
                <ProductList />
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
