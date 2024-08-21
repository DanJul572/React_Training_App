import { Controller } from 'react-hook-form';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Clear from '@mui/icons-material/Clear';
import Upload from '@mui/icons-material/Upload';

import { RenderFieldType } from '../../types';
import useImageField from './useImageField';

const ImageField = (props: RenderFieldType) => {
    const { handleChange, hanldeClear } = useImageField(props);

    return (
        <Controller
            name="image"
            control={props.control}
            render={({ field }) => (
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
                                        onChange={(e) =>
                                            handleChange(e, field)
                                        }
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
            )}
        />
    );
};

export default ImageField;
