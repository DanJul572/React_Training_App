import { Dispatch, SetStateAction } from 'react';
import { AxiosError } from 'axios';

import { AlertPropsType, ErrorResponseType } from '@/types';

const showErrorAlert = (
  error: AxiosError,
  setState: Dispatch<SetStateAction<AlertPropsType>>
): void => {
  if (error.response) {
    const errorResponse = error.response.data as ErrorResponseType;
    setState({
      open: true,
      type: 'error',
      message: errorResponse.error,
    });
  }
};

export default showErrorAlert;
