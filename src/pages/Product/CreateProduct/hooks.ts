import { useContext, useEffect } from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import request from '@/helpers/request';
import translator from '@/helpers/translator';

import { ZLoaderContext } from '@/context/ZLoader';
import { ZAlertContext } from '@/context/ZAlert';

import { ErrorResponseType } from '@/types';

import { ParamType, ProductFormType } from './types';

const useCreateProduct = () => {
    const params: ParamType = useParams();
    const navigate = useNavigate();

    const { setAlertProps } = useContext(ZAlertContext);
    const { setOpenLoader } = useContext(ZLoaderContext);

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

    const formatPayloads = (data: ProductFormType) => {
        if (data.stock || data.stock === 0) {
            data.stock = Number(data.stock);
        }
        if (data.size || data.size === 0) {
            data.size = Number(data.size);
        }
        return data;
    };

    const clearAlert = () => {
        setAlertProps({
            open: false,
            message: null,
            type: 'success',
        });
    };

    const showErrorAlert = (error: AxiosError): void => {
        if (error.response) {
            const errorResponse = error.response.data as ErrorResponseType;
            setAlertProps({
                open: true,
                message: errorResponse.error,
                type: 'error',
            });
        }
    };

    const showSuccessAlert = (message: string): void => {
        setAlertProps({
            open: true,
            message: message,
            type: 'success',
        });
    };

    const insertProduct = (data: ProductFormType) => {
        const formatedData = formatPayloads(data);
        request
            .post<ProductFormType>('/products', formatedData)
            .then(() => {
                showSuccessAlert(translator('product_is_created'));
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

    const updateProduct = (data: ProductFormType) => {
        const formatedData = formatPayloads(data);
        request
            .put<ProductFormType>(`/products/${params.id}`, formatedData)
            .then((response) => {
                showSuccessAlert(translator('product_is_updated'));
                reset(response);
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

    const getProduct = () => {
        setOpenLoader(true);
        const productId = params.id;
        request
            .get<ProductFormType>(`/products/${productId}`)
            .then((response) => {
                reset(response);
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
        if (params.id) {
            updateProduct(data);
        } else {
            insertProduct(data);
        }
    };

    const onClear = () => {
        reset();
    };

    const onBack = () => {
        navigate('/product');
    };

    useEffect(() => {
        if (params.id) {
            getProduct();
        }
    }, [params]);

    return {
        control,
        onBack,
        onClear,
        handleSubmit,
        onSubmit,
        resetField,
    };
};

export default useCreateProduct;
