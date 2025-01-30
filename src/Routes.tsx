import { createBrowserRouter } from 'react-router-dom';

import Empty from './layouts/Empty';
import Main from './layouts/Main';

import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';

import CreateProduct from './pages/Product/CreateProduct';
import CreateUser from './pages/User/CreateUser';
import ProductDetail from './pages/Product/ProductDetail';
import ProductList from './pages/Product/ProductList';
import UserList from './pages/User/UserList';

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
    {
        path: '/user',
        element: (
            <ProtectedRoute>
                <Main>
                    <UserList />
                </Main>
            </ProtectedRoute>
        ),
    },
    {
        path: '/user/create',
        element: (
            <ProtectedRoute>
                <Main>
                    <CreateUser />
                </Main>
            </ProtectedRoute>
        ),
    },
    {
        path: '/user/create/:id',
        element: (
            <ProtectedRoute>
                <Main>
                    <CreateUser />
                </Main>
            </ProtectedRoute>
        ),
    },
]);

export default router;
