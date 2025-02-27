import { useState, MouseEventHandler, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';

import { ZLoaderContext } from '@/context/ZLoader';
import { ZAlertContext } from '@/context/ZAlert';

import { OnCloseType } from './types';

const useFadeMenu = () => {
  const username = localStorage.getItem('name') || '';
  let avatar = 'A';
  if (username) {
    avatar = username.trim().charAt(0).toUpperCase();
  }

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
    avatar,
    handleClick,
    handleClose,
    handleLogout,
    username,
  };
};

export default useFadeMenu;
