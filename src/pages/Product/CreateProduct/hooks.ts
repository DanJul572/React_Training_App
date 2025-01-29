import { useContext, useEffect } from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';
import translator from '@/helpers/translator';

import { ZLoaderContext } from '@/context/ZLoader';
import { ZAlertContext } from '@/context/ZAlert';

import { ParamType, ProductFormType } from './types';

const useCreateProduct = () => {
    const params: ParamType = useParams();
    const navigate = useNavigate();

    const { setAlertProps } = useContext(ZAlertContext);
    const { setOpenLoader } = useContext(ZLoaderContext);

    const { control, handleSubmit, resetField, reset, setValue } =
        useForm<ProductFormType>({
            defaultValues: {
                imageDisplay: null,
                name: '',
                size: '',
                stock: 0,
                surface: '',
                type: '',
            },
        });

    const formatPayloads = (data: ProductFormType) => {
        if (data.stock || data.stock === 0) {
            data.stock = Number(data.stock);
        }
        if (data.image && data.imageDisplay) {
            data.imageDisplay = null;
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
            .post<ProductFormType, ProductFormType>(
                '/products',
                formatedData
            )
            .then(() => {
                showSuccessAlert(translator('product_is_created'));
                reset();
            })
            .catch((error: AxiosError) => {
                if (error.response) {
                    showErrorAlert(error, setAlertProps);
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
                    showErrorAlert(error, setAlertProps);
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
                response.image = null;
                response.imageDisplay = null;
                reset(response);
            })
            .catch((error: AxiosError) => {
                if (error.response) {
                    showErrorAlert(error, setAlertProps);
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
        handleSubmit,
        onBack,
        onClear,
        onSubmit,
        resetField,
        setValue,
    };
};

export default useCreateProduct;
