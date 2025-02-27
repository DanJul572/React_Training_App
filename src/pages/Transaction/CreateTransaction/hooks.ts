import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';

import { ZAlertContext } from '@/context/ZAlert';
import { ZLoaderContext } from '@/context/ZLoader';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';
import translator from '@/helpers/translator';

import { OptionType } from '@/types';

import { handleChangeProductType, TransactionFormType } from './types';

const useCreateTransaction = () => {
  const { setAlertProps } = useContext(ZAlertContext);
  const { setOpenLoader } = useContext(ZLoaderContext);

  const [categoryFilterValue, setCategoryFilterValue] = useState<
    string | undefined
  >();
  const [productOptions, setproductOptions] = useState<OptionType[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<OptionType[]>([]);
  const transacttionTypeOptions: OptionType[] = [
    {
      label: translator('in'),
      value: '1',
    },
    {
      label: translator('out'),
      value: '2',
    },
  ];

  const { control, handleSubmit, reset } = useForm<TransactionFormType>({
    defaultValues: {
      count: 0,
      product_id: null,
      transaction_type_id: '1',
    },
  });

  const handleChangeProduct: handleChangeProductType = (field, value) => {
    field.onChange(value);
  };

  const handleChangeCategoryFilter = (value: OptionType | null) => {
    setCategoryFilterValue(value?.value);
  };

  const getAllCategories = () => {
    setOpenLoader(true);
    request
      .get<OptionType[]>('/categories/options')
      .then((response) => {
        const options: OptionType[] = response.map((item) => {
          return {
            label: item.label.toString(),
            value: item.value.toString(),
          };
        });
        setCategoryOptions(options);
      })
      .catch((error: AxiosError) => {
        showErrorAlert(error, setAlertProps);
      })
      .finally(() => {
        setOpenLoader(false);
      });
  };

  const getAllProducts = () => {
    setOpenLoader(true);
    request
      .get<OptionType[]>(
        `/products/options?categoryFilter=${categoryFilterValue}`
      )
      .then((response) => {
        const options: OptionType[] = response.map((item) => {
          return {
            label: item.label.toString(),
            value: item.value.toString(),
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
          message: translator('data_is_created'),
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
    getAllCategories();
  }, []);

  useEffect(() => {
    if (categoryFilterValue) {
      getAllProducts();
    }
  }, [categoryFilterValue]);

  return {
    categoryFilterValue,
    categoryOptions,
    control,
    handleChangeCategoryFilter,
    handleChangeProduct,
    handleSubmit,
    onSubmit,
    productOptions,
    reset,
    transacttionTypeOptions,
  };
};

export default useCreateTransaction;
