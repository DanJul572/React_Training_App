import { useContext, useState } from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import request from '@/helpers/request';
import { ZLoaderContext } from '@/context/ZLoader';
import { ErrorResponse } from '@/types/errorResponse';

import { ProductFormType, ShowAlertType } from './types';

const useCreateProduct = () => {
    const { setOpen } = useContext(ZLoaderContext);

    const { control, handleSubmit, resetField, reset } =
        useForm<ProductFormType>({
            defaultValues: {
                label: '',
                type: '',
                price: 0,
                image: null,
            },
        });

    const [showAlert, setShowAlert] = useState<ShowAlertType>({
        data: null,
        isShow: false,
        message: null,
        type: 'success',
    });

    const formatPayloads = (data: ProductFormType) => {
        if (data.price || data.price === 0) {
            data.price = Number(data.price);
        }
        return data;
    };

    const clearAllMessage = () => {
        setShowAlert({
            data: null,
            isShow: false,
            message: null,
            type: 'success',
        });
    };

    const onSubmit: SubmitHandler<ProductFormType> = (data) => {
        const formatedData = formatPayloads(data);
        clearAllMessage();
        setOpen(true);
        request
            .post<ProductFormType>('/products', formatedData)
            .then(() => {
                setShowAlert({
                    data: null,
                    isShow: true,
                    message: 'Product has been created.',
                    type: 'success',
                });
                reset();
            })
            .catch((error: AxiosError) => {
                if (error.response) {
                    const errorResponse = error.response
                        .data as ErrorResponse;
                    const alertData: ShowAlertType = {
                        data: errorResponse.message,
                        isShow: true,
                        message: errorResponse.error,
                        type: 'error',
                    };
                    setShowAlert(alertData);
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
        handleClear,
        handleSubmit,
        onSubmit,
        resetField,
        showAlert,
    };
};

export default useCreateProduct;
