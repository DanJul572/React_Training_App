import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';

const SizeField = (props: RenderFieldType) => {
    return (
        <Controller
            name="size"
            control={props.control}
            render={({ field }) => (
                <TextField
                    {...field}
                    type="number"
                    label={translator('size')}
                />
            )}
        />
    );
};

export default SizeField;
