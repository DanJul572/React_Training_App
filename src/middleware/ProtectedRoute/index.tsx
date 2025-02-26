import { Navigate } from 'react-router-dom';

import { PropsType } from './types';

const ProtectedRoute = (props: PropsType) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return props.children;
};

export default ProtectedRoute;
