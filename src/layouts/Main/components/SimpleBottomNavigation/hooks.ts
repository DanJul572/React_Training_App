import { useLocation, useNavigate } from 'react-router-dom';

const useSimpleBottomNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const firstPath = location.pathname.split('/').filter(Boolean)[0];

    const getActivePath = (): number => {
        if (!firstPath) {
            return 0;
        } else if (firstPath === 'product') {
            return 1;
        } else {
            return 2;
        }
    };

    return {
        navigate,
        getActivePath,
    };
};

export default useSimpleBottomNavigation;
