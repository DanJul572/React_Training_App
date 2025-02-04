import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const useSidebar = () => {
    const isMobile = useMediaQuery({ maxWidth: 1024 });
    const location = useLocation();
    const firstPath = location.pathname.split('/').filter(Boolean)[0];

    const getActivePath = (): string => {
        if (!firstPath) {
            return '1';
        } else if (firstPath === 'product') {
            return '2';
        } else if (firstPath === 'transaction') {
            return '3';
        } else {
            return '4';
        }
    };

    return {
        isMobile,
        getActivePath,
    };
};

export default useSidebar;
