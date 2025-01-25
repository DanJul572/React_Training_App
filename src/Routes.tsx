import { createBrowserRouter } from 'react-router-dom';

import Empty from './layouts/Empty';
import Main from './layouts/Main';

import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';

import CreateProduct from './pages/Product/CreateProduct';
import ProductDetail from './pages/Product/ProductDetail';
import ProductList from './pages/Product/ProductList';

import CreateTransaction from './pages/Transaction/CreateTransaction';

import ProtectedRoute from './middleware/ProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Main>
                    <Dashboard />
                </Main>
            </ProtectedRoute>
        ),
    },
    {
        path: '/login',
        element: (
            <Empty>
                <Login />
            </Empty>
        ),
    },
    {
        path: '/product',
        element: (
            <ProtectedRoute>
                <Main>
                    <ProductList />
                </Main>
            </ProtectedRoute>
        ),
    },
    {
        path: '/product/create',
        element: (
            <ProtectedRoute>
                <Main>
                    <CreateProduct />
                </Main>
            </ProtectedRoute>
        ),
    },
    {
        path: '/product/create/:id',
        element: (
            <ProtectedRoute>
                <Main>
                    <CreateProduct />
                </Main>
            </ProtectedRoute>
        ),
    },
    {
        path: '/product/detail/:id',
        element: (
            <ProtectedRoute>
                <Main>
                    <ProductDetail />
                </Main>
            </ProtectedRoute>
        ),
    },
    {
        path: '/transaction',
        element: (
            <ProtectedRoute>
                <Main>
                    <CreateTransaction />
                </Main>
            </ProtectedRoute>
        ),
    },
]);

export default router;
