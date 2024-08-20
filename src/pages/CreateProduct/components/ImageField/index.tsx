import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Clear from '@mui/icons-material/Clear';
import Upload from '@mui/icons-material/Upload';

import { RenderFieldType } from '../../types';
import useImageField from './useImageField';

const ImageField = (props: RenderFieldType<'image'>) => {
    const { handleChange, hanldeClear } = useImageField(props);

    return (
        <TextField
            variant="outlined"
            label="Image"
            value={props.field.value ? props.field.value.name : ''}
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
                        {props.field.value?.name && (
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
