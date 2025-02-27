import { useContext, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  GridFilterModel,
  GridPaginationModel,
  GridSortModel,
} from '@mui/x-data-grid';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';

import { ZAlertContext } from '@/context/ZAlert';
import { ZConfirmationDialogContext } from '@/context/ZConfirmationDialog';
import { ZLoaderContext } from '@/context/ZLoader';

import {
  ErrorResponseType,
  PaginatedResponseType,
  CategoryType,
  SortType,
} from '@/types';

import deleteDialogProps from '@/constant/deteDialogProps';

import {
  DisplayDataType,
  GetUrlType,
  OnLoadType,
  TablePropertyType,
} from './types';

const useCategoryList = () => {
  const navigate = useNavigate();
  const { setAlertProps } = useContext(ZAlertContext);
  const { setDialogProps } = useContext(ZConfirmationDialogContext);
  const { setOpenLoader } = useContext(ZLoaderContext);

  const [displayData, setDisplayData] = useState<DisplayDataType>({
    rows: [],
    count: 0,
  });
  const [tableProperty, setTableProperty] = useState<TablePropertyType>({
    page: 1,
    quickFilter: null,
    sort: {
      field: 'name',
      sort: 'asc',
    },
  });

  const getUrl: GetUrlType = (prop) => {
    let url = `/categories?page=${prop.page}`;
    if (prop.quickFilter) {
      url += `&quickFilter=${prop.quickFilter}`;
    }
    if (prop.sort.field && prop.sort.sort) {
      url += `&orderBy=${prop.sort.field}&order=${prop.sort.sort}`;
    }
    return url;
  };

  const openDialog = (id: number): void => {
    const newProps = { ...deleteDialogProps };
    newProps.open = true;
    newProps.onConfirm = () => {
      onDelete(id);
    };
    setDialogProps(newProps);
  };

  const onAdd = (): void => {
    navigate('/category/create');
  };

  const onChangePage = (model: GridPaginationModel): void => {
    const pageRequest = model.page + 1;
    setTableProperty((prevState) => ({
      ...prevState,
      page: pageRequest,
    }));
  };

  const onDelete = (id: number): void => {
    setOpenLoader(true);
    request
      .remove<string>(`/categories/${id}`)
      .then((response) => {
        onLoad(tableProperty);
        setAlertProps({
          open: true,
          message: response,
          type: 'success',
        });
      })
      .catch((error: ErrorResponseType) => {
        setAlertProps({
          open: true,
          message: error.error,
          type: 'error',
        });
      })
      .finally(() => {
        setOpenLoader(false);
        setDialogProps((prevState) => ({
          ...prevState,
          open: false,
        }));
      });
  };

  const onEdit = (id: number): void => {
    navigate(`/category/create/${id}`);
  };

  const onFilter = (model: GridFilterModel): void => {
    const quickFilterValue = model.quickFilterValues;
    let finalValue = null;
    if (quickFilterValue && quickFilterValue.length) {
      finalValue = quickFilterValue.join(' ');
    }
    setTableProperty((prevState) => ({
      ...prevState,
      quickFilter: finalValue,
    }));
  };

  const onSort = (model: GridSortModel): void => {
    if (model.length && model[0].sort && model[0].field) {
      const field = model[0].field;
      const sort: SortType = model[0].sort;
      setTableProperty((prevState) => ({
        ...prevState,
        sort: { field: field, sort: sort },
      }));
    }
  };

  const onLoad: OnLoadType = (prop) => {
    setOpenLoader(true);
    const url = getUrl(prop);
    request
      .get<PaginatedResponseType<CategoryType>>(url)
      .then((response) => {
        setDisplayData((prevState) => ({
          ...prevState,
          rows: response.data,
          count: response.total,
        }));
      })
      .catch((error: AxiosError) => {
        showErrorAlert(error, setAlertProps);
      })
      .finally(() => {
        setOpenLoader(false);
      });
  };

  useEffect(() => {
    onLoad(tableProperty);
  }, [tableProperty]);

  return {
    displayData,
    onAdd,
    onChangePage,
    onDelete,
    onEdit,
    onFilter,
    onSort,
    openDialog,
  };
};

export default useCategoryList;
