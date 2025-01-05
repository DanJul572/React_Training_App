import TextField from '@mui/material/TextField';

import { RenderFieldType } from '../../types';
import { Controller } from 'react-hook-form';

const TypeField = (props: RenderFieldType) => {
    return (
        <Controller
            name="type"
            control={props.control}
            render={({ field }) => <TextField {...field} label="Type" />}
        />
    );
};

export default TypeField;
