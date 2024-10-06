import { ReactNode, Dispatch, SetStateAction } from 'react';

export type PropsType = {
    children: ReactNode;
};

export type ZLoaderContextType = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
