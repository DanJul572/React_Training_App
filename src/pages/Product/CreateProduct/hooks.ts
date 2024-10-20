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

    const clearAlert = () => {
        setShowAlert({
            data: null,
            isShow: false,
            message: null,
            type: 'success',
        });
    };

    const showErrorAlert = (error: AxiosError): void => {
        if (error.response) {
            const errorResponse = error.response.data as ErrorResponse;
            setShowAlert({
                data: errorResponse.message,
                isShow: true,
                message: errorResponse.error,
                type: 'error',
            });
        }
    };

    const showSuccessAlert = (message: string): void => {
        setShowAlert({
            data: null,
            isShow: true,
            message: message,
            type: 'success',
        });
    };

    const onSubmit: SubmitHandler<ProductFormType> = (data) => {
        const formatedData = formatPayloads(data);
        clearAlert();
        setOpen(true);
        request
            .post<ProductFormType>('/products', formatedData)
            .then(() => {
                showSuccessAlert('Product has been created.');
                reset();
            })
            .catch((error: AxiosError) => {
                if (error.response) {
                    showErrorAlert(error);
                }
            })
            .finally(() => {
                setOpen(false);
            });
    };

    const onClear = () => {
        reset();
    };

    return {
        control,
        onClear,
        handleSubmit,
        onSubmit,
        resetField,
        showAlert,
    };
};

export default useCreateProduct;
