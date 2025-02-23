import { useContext, useEffect } from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';
import translator from '@/helpers/translator';

import { ZLoaderContext } from '@/context/ZLoader';
import { ZAlertContext } from '@/context/ZAlert';

import { ParamType, CategoryFormType } from './types';

const useCreateCategory = () => {
    const params: ParamType = useParams();
    const navigate = useNavigate();

    const { setAlertProps } = useContext(ZAlertContext);
    const { setOpenLoader } = useContext(ZLoaderContext);

    const { control, handleSubmit, resetField, reset, setValue } =
        useForm<CategoryFormType>({
            defaultValues: {
                name: '',
            },
        });

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

    const insertCategory = (data: CategoryFormType) => {
        request
            .post<CategoryFormType, CategoryFormType>('/categories', data)
            .then(() => {
                showSuccessAlert(translator('data_is_created'));
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

    const updateCategory = (data: CategoryFormType) => {
        request
            .put<CategoryFormType>(`/categories/${params.id}`, data)
            .then((response) => {
                showSuccessAlert(translator('data_is_updated'));
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

    const getCategory = () => {
        setOpenLoader(true);
        const categoryId = params.id;
        request
            .get<CategoryFormType>(`/categories/${categoryId}`)
            .then((response) => {
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

    const onSubmit: SubmitHandler<CategoryFormType> = (data) => {
        clearAlert();
        setOpenLoader(true);
        if (params.id) {
            updateCategory(data);
        } else {
            insertCategory(data);
        }
    };

    const onClear = () => {
        reset();
    };

    const onBack = () => {
        navigate('/category');
    };

    useEffect(() => {
        if (params.id) {
            getCategory();
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

export default useCreateCategory;
