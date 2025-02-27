import { useContext, useState } from 'react';
import { AxiosError } from 'axios';
import { useMediaQuery } from 'react-responsive';
import { useForm, SubmitHandler } from 'react-hook-form';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';

import { ZLoaderContext } from '@/context/ZLoader';
import { AlertPropsType } from '@/types';

import { LoginFormType, LoginResponseType } from './types';

const useLogin = () => {
  const { setOpenLoader } = useContext(ZLoaderContext);
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const [alert, setAlert] = useState<AlertPropsType>({
    type: 'error',
    open: false,
    message: null,
  });

  const { control, handleSubmit, reset } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const setLocalStorageData = (response: LoginResponseType) => {
    localStorage.setItem('name', response.user.name);
    localStorage.setItem('role_id', response.user.role_id.toString());
    localStorage.setItem('token', response.token);
  };

  const login = (data: LoginFormType) => {
    setOpenLoader(true);
    request
      .post<LoginResponseType, LoginFormType>('/login', data)
      .then((response) => {
        setLocalStorageData(response);
        window.location.href = '/';
      })
      .catch((error: AxiosError) => {
        showErrorAlert(error, setAlert);
      })
      .finally(() => {
        setOpenLoader(false);
      });
  };

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    login(data);
  };

  return {
    alert,
    control,
    handleSubmit,
    isMobile,
    onSubmit,
    reset,
  };
};

export default useLogin;
