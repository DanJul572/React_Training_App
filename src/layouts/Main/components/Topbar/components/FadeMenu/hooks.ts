import { useState, MouseEventHandler, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';

import { ZLoaderContext } from '@/context/ZLoader';
import { ZAlertContext } from '@/context/ZAlert';

import { OnCloseType } from './types';

const useFadeMenu = () => {
    const { setOpenLoader } = useContext(ZLoaderContext);
    const { setAlertProps } = useContext(ZAlertContext);

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose: OnCloseType = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setOpenLoader(true);
        request
            .get('/logout')
            .then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('role_id');
                navigate('/login');
            })
            .catch((error: AxiosError) => {
                showErrorAlert(error, setAlertProps);
            })
            .catch(() => {
                setOpenLoader(false);
            });
    };

    return {
        anchorEl,
        handleClick,
        handleClose,
        handleLogout,
    };
};

export default useFadeMenu;
