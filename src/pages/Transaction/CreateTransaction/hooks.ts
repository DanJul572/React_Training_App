import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';

import { ZAlertContext } from '@/context/ZAlert';
import { ZLoaderContext } from '@/context/ZLoader';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';
import translator from '@/helpers/translator';

import { OptionType, ProductType } from '@/types';

import { handleChangeProductType, TransactionFormType } from './types';

const useCreateTransaction = () => {
    const { setAlertProps } = useContext(ZAlertContext);
    const { setOpenLoader } = useContext(ZLoaderContext);

    const [productOpttions, setproductOptions] = useState<OptionType[]>(
        []
    );

    const { control, handleSubmit, reset } = useForm<TransactionFormType>({
        defaultValues: {
            product_id: null,
            count: 0,
        },
    });

    const handleChangeProduct: handleChangeProductType = (
        field,
        value
    ) => {
        field.onChange(value);
    };

    const getAllProducts = () => {
        setOpenLoader(true);
        request
            .get<ProductType[]>('/products?isWihoutProps=true')
            .then((response) => {
                const options: OptionType[] = response.map((item) => {
                    return {
                        label: item.name.toString(),
                        value: item.id.toString(),
                    };
                });
                setproductOptions(options);
            })
            .catch((error: AxiosError) => {
                showErrorAlert(error, setAlertProps);
            })
            .finally(() => {
                setOpenLoader(false);
            });
    };

    const onSubmit: SubmitHandler<TransactionFormType> = (data) => {
        setOpenLoader(true);
        request
            .post<TransactionFormType, TransactionFormType>(
                '/transactions',
                data
            )
            .finally(() => {
                setAlertProps({
                    message: translator('transaction_is_created'),
                    open: true,
                    type: 'success',
                });
                reset();
            })
            .catch((error: AxiosError) => {
                showErrorAlert(error, setAlertProps);
            })
            .finally(() => {
                setOpenLoader(false);
            });
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return {
        control,
        handleChangeProduct,
        handleSubmit,
        onSubmit,
        productOpttions,
        reset,
    };
};

export default useCreateTransaction;
