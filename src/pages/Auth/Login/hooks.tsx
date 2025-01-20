import { useContext, useState } from 'react';
import { AxiosError } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';

import { ZLoaderContext } from '@/context/ZLoader';
import { AlertPropsType } from '@/types';

import { LoginFormType, LoginResponseType } from './types';

const useLogin = () => {
    const navigate = useNavigate();
    const { setOpenLoader } = useContext(ZLoaderContext);

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

    const login = (data: LoginFormType) => {
        setOpenLoader(true);
        request
            .post<LoginResponseType, LoginFormType>('/login', data)
            .then((response) => {
                localStorage.setItem('token', response.token);
                localStorage.setItem(
                    'role_id',
                    response.user.role_id.toString()
                );
                navigate('/');
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
        onSubmit,
        reset,
    };
};

export default useLogin;
