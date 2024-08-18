import { ChangeEventHandler, MouseEventHandler } from 'react';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Clear from '@mui/icons-material/Clear';
import Upload from '@mui/icons-material/Upload';

import { RenderField } from '../types';

const ImageField = ({ field, resetField }: RenderField<'image'>) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event.target.files?.[0];
        field.onChange(file);
    };

    const hanldeClear: MouseEventHandler<HTMLButtonElement> = () => {
        resetField('image');
    };

    return (
        <TextField
            variant="outlined"
            label="Image"
            value={field.value ? field.value.name : ''}
            InputProps={{
                readOnly: true,
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton component="label">
                            <Upload />
                            <input
                                type="file"
                                hidden={true}
                                onChange={handleChange}
                            />
                        </IconButton>
                        {field.value?.name && (
                            <IconButton onClick={hanldeClear}>
                                <Clear />
                            </IconButton>
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default ImageField;
