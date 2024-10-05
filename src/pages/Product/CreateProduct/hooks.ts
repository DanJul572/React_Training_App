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
                type: '',
                price: 0,
                image: null,
            },
        });

    const [error, setError] = useState<ErrorResponse>({
        error: null,
        message: null,
        statusCode: null,
    });

    const [successMessage, setSuccessMessage] = useState<string | null>(
        null
    );

    const formatPayloads = (data: ProductFormType) => {
        data.price = Number(data.price);
        return data;
    };

    const clearAllMessage = () => {
        setSuccessMessage(null);
        setError({
            error: null,
            message: null,
            statusCode: null,
        });
    };

    const onSubmit: SubmitHandler<ProductFormType> = (data) => {
        const formatedData = formatPayloads(data);
        clearAllMessage();
        request
            .post<ProductFormType>('/products', formatedData)
            .then(() => {
                setSuccessMessage('Product has been created.');
                reset();
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
        handleClear,
        handleSubmit,
        onSubmit,
        resetField,
        successMessage,
    };
};

export default useCreateProduct;
