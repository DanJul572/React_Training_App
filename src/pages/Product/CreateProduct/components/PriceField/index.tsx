import TextField from '@mui/material/TextField';

import { RenderFieldType } from '../../types';
import { Controller } from 'react-hook-form';

const PriceField = (props: RenderFieldType) => {
    return (
        <Controller
            name="price"
            control={props.control}
            render={({ field }) => (
                <TextField {...field} label="Price" type="number" />
            )}
        />
    );
};

export default PriceField;
