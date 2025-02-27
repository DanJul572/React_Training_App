import { createBrowserRouter } from 'react-router-dom';

import Empty from './layouts/Empty';
import Main from './layouts/Main';

import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';

import CategoryList from './pages/Category/CategoryList';
import CreateCategory from './pages/Category/CreateCategory';
import CreateProduct from './pages/Product/CreateProduct';
import CreateUser from './pages/User/CreateUser';
import ProductDetail from './pages/Product/ProductDetail';
import ProductList from './pages/Product/ProductList';
import UserList from './pages/User/UserList';

import CreateTransaction from './pages/Transaction/CreateTransaction';

import ProtectedRoute from './middleware/ProtectedRoute';
import UnProtectedRoute from './middleware/UnProtectedRoute';

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
      <UnProtectedRoute>
        <Empty>
          <Login />
        </Empty>
      </UnProtectedRoute>
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
  {
    path: '/category',
    element: (
      <ProtectedRoute>
        <Main>
          <CategoryList />
        </Main>
      </ProtectedRoute>
    ),
  },
  {
    path: '/category/create',
    element: (
      <ProtectedRoute>
        <Main>
          <CreateCategory />
        </Main>
      </ProtectedRoute>
    ),
  },
  {
    path: '/category/create/:id',
    element: (
      <ProtectedRoute>
        <Main>
          <CreateCategory />
        </Main>
      </ProtectedRoute>
    ),
  },
]);

export default router;
