import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import request from '@/helpers/request';

import { LoginFormType, LoginResponseType } from './types';

const useLogin = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, reset } = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const login = (data: LoginFormType) => {
        request
            .post<LoginResponseType, LoginFormType>('/login', data)
            .then((response) => {
                localStorage.setItem('token', response.token);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        login(data);
    };

    return {
        control,
        handleSubmit,
        onSubmit,
        reset,
    };
};

export default useLogin;
