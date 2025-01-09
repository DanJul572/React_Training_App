import { useContext, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { GridFilterModel, GridPaginationModel } from '@mui/x-data-grid';

import request from '@/helpers/request';
import { ZLoaderContext } from '@/context/ZLoader';
import { PaginatedResponseType } from '@/types/paginationReponse';

import {
    DisplayDataType,
    GetUrlType,
    OnLoadType,
    ProductType,
} from './types';

const ProductList = () => {
    const navigate = useNavigate();
    const { setOpenLoader } = useContext(ZLoaderContext);

    const [displayData, setDisplayData] = useState<DisplayDataType>({
        rows: [],
        count: 0,
        page: 1,
        quickFilter: null,
    });

    const getUrl: GetUrlType = (page, quickFilter) => {
        let url = `/products?page=${page}`;
        if (quickFilter) {
            url += `&quickFilter=${quickFilter}`;
        }
        return url;
    };

    const onAdd = (): void => {
        navigate('/product/create');
    };

    const onChangePage = (model: GridPaginationModel): void => {
        const pageRequest = model.page + 1;
        onLoad(pageRequest, displayData.quickFilter);
        setDisplayData((prevState) => ({
            ...prevState,
            page: pageRequest,
        }));
    };

    const onDelete = (): void => {};

    const onEdit = (): void => {};

    const onFilter = (model: GridFilterModel): void => {
        const quickFilterValue = model.quickFilterValues;
        if (quickFilterValue && quickFilterValue.length) {
            onLoad(displayData.page, quickFilterValue.join(' '));
            setDisplayData((prevState) => ({
                ...prevState,
                quickFilter: quickFilterValue.join(' '),
            }));
        } else {
            onLoad(displayData.page, null);
            setDisplayData((prevState) => ({
                ...prevState,
                quickFilter: null,
            }));
        }
    };

    const onSelect = (): void => {};

    const onSort = (): void => {};

    const onLoad: OnLoadType = (page, quickFilter) => {
        setOpenLoader(true);
        const url = getUrl(page, quickFilter);
        request
            .get<PaginatedResponseType<ProductType>>(url)
            .then((response) => {
                setDisplayData((prevState) => ({
                    ...prevState,
                    rows: response.data,
                    count: response.total,
                }));
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
        displayData,
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
