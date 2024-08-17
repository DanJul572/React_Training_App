import { useNavigate } from 'react-router-dom';

const useMenuItem = () => {
    const navigate = useNavigate();

    const handleClick = (url: string | undefined) => {
        if (url) {
            navigate(url);
        }
    };

    return {
        handleClick,
    };
};

export default useMenuItem;
