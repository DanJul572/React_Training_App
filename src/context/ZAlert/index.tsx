import { createContext, useState } from 'react';

import Alert from '@mui/material/Alert';

import { AlertPropsType } from '@/types';

import { containerStyle } from './styles';
import { PropsType, ZAlertContextType } from './types';

const defaultValue: AlertPropsType = {
  open: false,
  message: '',
  type: 'error',
};

const ZAlertContext = createContext<ZAlertContextType>({
  alertProps: defaultValue,
  setAlertProps: () => {},
});

const ZAlert = (props: PropsType) => {
  const [alertProps, setAlertProps] =
    useState<AlertPropsType>(defaultValue);

  const handleClose = () => {
    setAlertProps((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  return (
    <ZAlertContext.Provider value={{ alertProps, setAlertProps }}>
      {alertProps.open && (
        <Alert
          severity={alertProps.type}
          onClose={handleClose}
          style={containerStyle}
        >
          {alertProps.message}
        </Alert>
      )}
      {props.children}
    </ZAlertContext.Provider>
  );
};

export { ZAlert, ZAlertContext };
