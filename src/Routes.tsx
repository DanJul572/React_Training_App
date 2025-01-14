import { createBrowserRouter } from 'react-router-dom';

import Main from './layouts/Main';

import App from './App';
import CreateProduct from './pages/Product/CreateProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';
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
        element: <Login />,
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
]);

export default router;
