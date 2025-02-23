import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';

const NameField = (props: RenderFieldType) => {
    return (
        <Controller
            name="name"
            control={props.control}
            render={({ field }) => (
                <TextField {...field} label={translator('name')} />
            )}
        />
    );
};

export default NameField;
