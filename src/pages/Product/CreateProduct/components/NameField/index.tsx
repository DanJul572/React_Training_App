import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import { RenderFieldType } from '../../types';

const NameField = (props: RenderFieldType) => {
    return (
        <Controller
            name="name"
            control={props.control}
            render={({ field }) => <TextField {...field} label="Name" />}
        />
    );
};

export default NameField;
