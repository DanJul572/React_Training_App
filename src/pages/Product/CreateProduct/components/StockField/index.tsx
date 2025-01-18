import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';

const StockField = (props: RenderFieldType) => {
    return (
        <Controller
            name="stock"
            control={props.control}
            render={({ field }) => (
                <TextField
                    {...field}
                    type="number"
                    label={translator('stock')}
                />
            )}
        />
    );
};

export default StockField;
