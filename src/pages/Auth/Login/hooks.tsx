import { useContext, useState } from 'react';
import { AxiosError } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import request from '@/helpers/request';
import { ZLoaderContext } from '@/context/ZLoader';
import { AlertPropsType, ErrorResponseType } from '@/types';

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
                navigate('/');
            })
            .catch((error: AxiosError) => {
                if (error.response) {
                    const errorResponse = error.response
                        .data as ErrorResponseType;
                    setAlert({
                        open: true,
                        type: 'error',
                        message: errorResponse.error,
                    });
                }
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
