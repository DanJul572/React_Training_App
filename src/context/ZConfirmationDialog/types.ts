import { ReactNode, Dispatch, SetStateAction } from 'react';
import { ZConfirmationDialogPropsType } from '@/types';

export type PropsType = {
    children: ReactNode;
};

export type ZConfirmationDialogContextType = {
    dialogProps: ZConfirmationDialogPropsType;
    setDialogProps: Dispatch<SetStateAction<ZConfirmationDialogPropsType>>;
};
