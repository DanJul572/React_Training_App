import { Dispatch, ReactNode, SetStateAction } from 'react';

export type PropsType = {
    children: ReactNode;
};

export type ZAlertPropsType = {
    message: string | null;
    open: boolean;
    type: 'error' | 'success';
};

export type ZAlertContextType = {
    alertProps: ZAlertPropsType;
    setAlertProps: Dispatch<SetStateAction<ZAlertPropsType>>;
};
