import { useState, MouseEvent } from 'react';

const useFadeMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl,
        handleClick,
        handleClose,
    };
};

export default useFadeMenu;
