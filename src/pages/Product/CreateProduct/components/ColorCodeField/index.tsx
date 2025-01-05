import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import { RenderFieldType } from '../../types';

const ColorCodeField = (props: RenderFieldType) => {
    return (
        <Controller
            name="colorCode"
            control={props.control}
            render={({ field }) => (
                <TextField {...field} label="Color Code" />
            )}
        />
    );
};

export default ColorCodeField;
