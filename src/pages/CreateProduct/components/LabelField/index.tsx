import TextField from '@mui/material/TextField';

import { RenderFieldType } from '../../types';
import { Controller } from 'react-hook-form';

const LabelField = (props: RenderFieldType) => {
    return (
        <Controller
            name="label"
            control={props.control}
            render={({ field }) => <TextField {...field} label="Label" />}
        />
    );
};

export default LabelField;
