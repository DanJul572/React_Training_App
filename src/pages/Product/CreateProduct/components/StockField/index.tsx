import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import { RenderFieldType } from '../../types';

const StockField = (props: RenderFieldType) => {
    return (
        <Controller
            name="stock"
            control={props.control}
            render={({ field }) => (
                <TextField {...field} label="Stock" type="number" />
            )}
        />
    );
};

export default StockField;
