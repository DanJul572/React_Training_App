import { useContext, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import request from '@/helpers/request';
import showErrorAlert from '@/helpers/showErrorAlert';

import { ZLoaderContext } from '@/context/ZLoader';
import { ZAlertContext } from '@/context/ZAlert';

import { ResponseType } from './types';

const useCardList = () => {
  const { setOpenLoader } = useContext(ZLoaderContext);
  const { setAlertProps } = useContext(ZAlertContext);

  const [dataCount, setDataCount] = useState<ResponseType>({
    userCount: 0,
    productCount: 0,
  });

  const onLoad = () => {
    setOpenLoader(true);
    request
      .get<ResponseType>('/dashboard')
      .then((response) => {
        setDataCount(response);
      })
      .catch((error: AxiosError) => {
        showErrorAlert(error, setAlertProps);
      })
      .finally(() => {
        setOpenLoader(false);
      });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return {
    dataCount,
  };
};

export default useCardList;
