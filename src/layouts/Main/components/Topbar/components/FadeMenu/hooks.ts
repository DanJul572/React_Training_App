import { useState, MouseEventHandler, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import request from '@/helpers/request';

import { ZLoaderContext } from '@/context/ZLoader';
import { ZAlertContext } from '@/context/ZAlert';

import { ErrorResponseType } from '@/types';

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
                navigate('/login');
            })
            .catch((error: AxiosError) => {
                if (error.response) {
                    const errorResponse = error.response
                        .data as ErrorResponseType;
                    setAlertProps({
                        open: true,
                        message: errorResponse.error,
                        type: 'error',
                    });
                }
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
