import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';

import { containerStyle } from './styles';
import { ShowAlertType } from '../../types';

const AlertMessage = (props: ShowAlertType) => {
    if (!props.isShow || !props.message) return false;

    return (
        <Box sx={containerStyle}>
            <Alert severity={props.type}>
                {props.message && <AlertTitle>{props.message}</AlertTitle>}
            </Alert>
        </Box>
    );
};

export default AlertMessage;
