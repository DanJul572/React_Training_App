import { createContext, useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import { PropsType, ZLoaderContextType } from './types';
import { containerStyle } from './styles';

const ZLoaderContext = createContext<ZLoaderContextType>({
    open: false,
    setOpen: () => {},
});

const ZLoader = (props: PropsType) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ZLoaderContext.Provider value={{ open, setOpen }}>
            <Backdrop
                sx={containerStyle}
                open={open}
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
