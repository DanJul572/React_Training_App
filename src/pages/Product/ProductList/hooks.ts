import { useContext, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import request from '@/helpers/request';
import { ZLoaderContext } from '@/context/ZLoader';
import { PaginatedResponseType } from '@/types/paginationReponse';

import { ProductType } from './types';

const ProductList = () => {
    const navigate = useNavigate();
    const { setOpenLoader } = useContext(ZLoaderContext);

    const onAdd = (): void => {
        navigate('/product/create');
    };

    const onChangePage = (): void => {};

    const onDelete = (): void => {};

    const onEdit = (): void => {};

    const onFilter = (): void => {};

    const onSelect = (): void => {};

    const onSort = (): void => {};

    const onLoad = () => {
        setOpenLoader(true);
        request
            .get<PaginatedResponseType<ProductType>>('/products')
            .then((response) => {
                console.log(response);
            })
            .catch((error: AxiosError) => {
                if (error.response) {
                    console.log(error.response);
                }
            })
            .finally(() => {
                setOpenLoader(false);
            });
    };

    useEffect(() => {
        onLoad();
    }, []);

    return {
        onAdd,
        onChangePage,
        onDelete,
        onEdit,
        onFilter,
        onSelect,
        onSort,
    };
};

export default ProductList;
