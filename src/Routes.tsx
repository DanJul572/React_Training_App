import { createBrowserRouter } from 'react-router-dom';

import Empty from './layouts/Empty';
import Main from './layouts/Main';

import App from './App';
import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';

import CreateProduct from './pages/Product/CreateProduct';
import ProductDetail from './pages/Product/ProductDetail';
import ProductList from './pages/Product/ProductList';

import ProtectedRoute from './middleware/ProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Main>
                    <App />
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
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <Main>
                    <Dashboard />
                </Main>
            </ProtectedRoute>
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
]);

export default router;
