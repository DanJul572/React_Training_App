import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';

const SurfaceField = (props: RenderFieldType) => {
    return (
        <Controller
            name="surface"
            control={props.control}
            render={({ field }) => (
                <TextField {...field} label={translator('surface')} />
            )}
        />
    );
};

export default SurfaceField;
