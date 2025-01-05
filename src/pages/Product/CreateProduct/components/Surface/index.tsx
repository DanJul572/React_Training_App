import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import { RenderFieldType } from '../../types';

const SurfaceField = (props: RenderFieldType) => {
    return (
        <Controller
            name="surface"
            control={props.control}
            render={({ field }) => (
                <TextField {...field} label="Surface" />
            )}
        />
    );
};

export default SurfaceField;
