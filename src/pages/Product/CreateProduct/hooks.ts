import { useState } from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import request from '@/helpers/request';
import { ErrorResponse } from '@/types/errorResponse';

import { ProductFormType } from './types';

const useCreateProduct = () => {
    const { control, handleSubmit, resetField, reset } =
        useForm<ProductFormType>({
            defaultValues: {
                label: '',
                image: undefined,
            },
        });

    const [error, setError] = useState<ErrorResponse>({
        error: null,
        message: null,
        statusCode: null,
    });

    const onSubmit: SubmitHandler<ProductFormType> = (data) => {
        request
            .post<ProductFormType>('/products', data)
            .then((response) => {
                console.log(response);
            })
            .catch((error: AxiosError) => {
                if (error.response) {
                    setError(error.response.data as ErrorResponse);
                }
            });
    };

    const handleClear = () => {
        reset();
    };

    return {
        control,
        error,
        handleSubmit,
        onSubmit,
        resetField,
        handleClear,
    };
};

export default useCreateProduct;
