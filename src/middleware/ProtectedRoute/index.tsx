import { useNavigate } from 'react-router-dom';

import { PropsType } from './types';

const ProtectedRoute = (props: PropsType) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    if (!token) {
        return navigate('/login');
    }
    return props.children;
};

export default ProtectedRoute;
