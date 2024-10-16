import Check from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';

import { PropsType } from './types';

const SuccessAlert = (props: PropsType) => {
    if (!props.message) {
        return false;
    }

    return (
        <Alert icon={<Check fontSize="inherit" />} severity="success">
            {props.message}
        </Alert>
    );
};

export default SuccessAlert;
