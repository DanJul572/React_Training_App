import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';

const EmailField = (props: RenderFieldType) => {
    return (
        <Controller
            name="email"
            control={props.control}
            render={({ field }) => (
                <TextField
                    {...field}
                    type="text"
                    label={translator('email')}
                />
            )}
        />
    );
};

export default EmailField;
