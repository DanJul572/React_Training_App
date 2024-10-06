import { useContext, useState } from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import request from '@/helpers/request';
import { ZLoaderContextState } from '@/context/ZLoaderContext';
import { ErrorResponse } from '@/types/errorResponse';

import { ProductFormType } from './types';

const useCreateProduct = () => {
    const { setOpen } = useContext(ZLoaderContextState);

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
        if (data.price || data.price === 0) {
            data.price = Number(data.price);
        }
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
        setOpen(true);
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
            })
            .finally(() => {
                setOpen(false);
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
