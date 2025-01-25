import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import { ZLoaderContext } from '@/context/ZLoader';
import { ZAlertContext } from '@/context/ZAlert';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';

import { ProductType } from '@/types';

import { ParamsType } from './types';

const useProductDetail = () => {
    const params: ParamsType = useParams();

    const navigate = useNavigate();

    const { setOpenLoader } = useContext(ZLoaderContext);
    const { setAlertProps } = useContext(ZAlertContext);

    const [product, setProduct] = useState<ProductType>({
        created_at: '',
        id: 0,
        image: null,
        name: '',
        size: '',
        stock: 0,
        surface: '',
        type: '',
        updated_at: '',
    });

    const getProduct = () => {
        setOpenLoader(true);
        request
            .get<ProductType>(`/products/${params.id}`)
            .then((response) => {
                setProduct(response);
            })
            .catch((error: AxiosError) => {
                showErrorAlert(error, setAlertProps);
            })
            .finally(() => {
                setOpenLoader(false);
            });
    };

    const onBack = () => {
        navigate('/product');
    };

    useEffect(() => {
        if (params.id) {
            getProduct();
        }
    }, [params.id]);

    return {
        getProduct,
        onBack,
        product,
    };
};

export default useProductDetail;
