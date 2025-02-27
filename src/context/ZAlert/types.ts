import { Dispatch, ReactNode, SetStateAction } from 'react';
import { AlertPropsType } from '@/types';

export type PropsType = {
  children: ReactNode;
};

export type ZAlertContextType = {
  alertProps: AlertPropsType;
  setAlertProps: Dispatch<SetStateAction<AlertPropsType>>;
};
