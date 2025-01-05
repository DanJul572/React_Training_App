import { useContext, useState } from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import request from '@/helpers/request';
import { ZLoaderContext } from '@/context/ZLoader';
import { ErrorResponse } from '@/types/errorResponse';

import { ProductFormType, ShowAlertType } from './types';

const useCreateProduct = () => {
    const { setOpenLoader } = useContext(ZLoaderContext);

    const navigate = useNavigate();

    const { control, handleSubmit, resetField, reset } =
        useForm<ProductFormType>({
            defaultValues: {
                colorCode: '',
                image: null,
                name: '',
                size: 0,
                stock: 0,
                surface: '',
                type: '',
            },
        });

    const [showAlert, setShowAlert] = useState<ShowAlertType>({
        data: null,
        isShow: false,
        message: null,
        type: 'success',
    });

    const formatPayloads = (data: ProductFormType) => {
        if (data.stock || data.stock === 0) {
            data.stock = Number(data.stock);
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

    const insertProduct = (data: ProductFormType) => {
        const formatedData = formatPayloads(data);
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
                setOpenLoader(false);
            });
    };

    const onSubmit: SubmitHandler<ProductFormType> = (data) => {
        clearAlert();
        setOpenLoader(true);
        insertProduct(data);
    };

    const onClear = () => {
        reset();
    };

    const onBack = () => {
        navigate('/product');
    };

    return {
        control,
        onBack,
        onClear,
        handleSubmit,
        onSubmit,
        resetField,
        showAlert,
    };
};

export default useCreateProduct;
