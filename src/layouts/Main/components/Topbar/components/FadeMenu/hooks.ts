import { useState, MouseEventHandler } from 'react';
import { OnCloseType } from './types';

const useFadeMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose: OnCloseType = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl,
        handleClick,
        handleClose,
    };
};

export default useFadeMenu;
