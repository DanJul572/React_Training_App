import { useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { ZLoaderContextState } from '@/context/ZLoaderContext';
import translator from '@/helpers/translator';

import { PropsType } from './types';
import { containerStyle } from './styles';

const ZLoader = (props: PropsType) => {
    const { open } = useContext(ZLoaderContextState);

    return (
        <Backdrop
            sx={containerStyle}
            open={open}
            onClick={props.handleClose}
        >
            <CircularProgress color="inherit" size={15} />
            <Typography>{translator('loading')}...</Typography>
        </Backdrop>
    );
};

export default ZLoader;
