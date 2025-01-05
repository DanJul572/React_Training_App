import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import { RenderFieldType } from '../../types';

const SizeField = (props: RenderFieldType) => {
    return (
        <Controller
            name="size"
            control={props.control}
            render={({ field }) => (
                <TextField {...field} label="Size" type="number" />
            )}
        />
    );
};

export default SizeField;
