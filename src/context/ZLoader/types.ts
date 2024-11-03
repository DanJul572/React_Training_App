import { ReactNode, Dispatch, SetStateAction } from 'react';

export type PropsType = {
    children: ReactNode;
};

export type ZLoaderContextType = {
    openLoader: boolean;
    setOpenLoader: Dispatch<SetStateAction<boolean>>;
};
