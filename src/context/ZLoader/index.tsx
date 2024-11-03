import { createContext, useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import { PropsType, ZLoaderContextType } from './types';
import { containerStyle } from './styles';

const ZLoaderContext = createContext<ZLoaderContextType>({
    openLoader: false,
    setOpenLoader: () => {},
});

const ZLoader = (props: PropsType) => {
    const [openLoader, setOpenLoader] = useState<boolean>(false);

    const handleClose = () => {
        setOpenLoader(false);
    };

    return (
        <ZLoaderContext.Provider value={{ openLoader, setOpenLoader }}>
            <Backdrop
                sx={containerStyle}
                open={openLoader}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" size={15} />
                <Typography>{translator('loading')}...</Typography>
            </Backdrop>
            {props.children}
        </ZLoaderContext.Provider>
    );
};

export { ZLoader, ZLoaderContext };
