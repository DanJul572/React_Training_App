import { useContext, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { GridPaginationModel } from '@mui/x-data-grid';

import request from '@/helpers/request';
import { ZLoaderContext } from '@/context/ZLoader';
import { PaginatedResponseType } from '@/types/paginationReponse';

import { onLoadType, ProductType } from './types';

const ProductList = () => {
    const navigate = useNavigate();
    const { setOpenLoader } = useContext(ZLoaderContext);

    const [rows, setRows] = useState<ProductType[]>([]);
    const [count, setCount] = useState<number>(0);

    const onAdd = (): void => {
        navigate('/product/create');
    };

    const onChangePage = (model: GridPaginationModel): void => {
        onLoad(model.page + 1);
    };

    const onDelete = (): void => {};

    const onEdit = (): void => {};

    const onFilter = (): void => {};

    const onSelect = (): void => {};

    const onSort = (): void => {};

    const onLoad: onLoadType = (page) => {
        setOpenLoader(true);
        const url = `/products?page=${page}`;
        request
            .get<PaginatedResponseType<ProductType>>(url)
            .then((response) => {
                setRows(response.data);
                setCount(response.total);
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
        onLoad(1);
    }, []);

    return {
        onAdd,
        onChangePage,
        onDelete,
        onEdit,
        onFilter,
        onSelect,
        onSort,
        count,
        rows,
    };
};

export default ProductList;
