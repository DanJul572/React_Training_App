import Clear from '@mui/icons-material/Clear';
import Upload from '@mui/icons-material/Upload';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { PropsType } from './types';

const ZUpload = (props: PropsType) => {
    return (
        <TextField
            variant="outlined"
            label={props.label}
            value={props.value ? props.value.name : ''}
            InputProps={{
                readOnly: true,
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton component="label">
                            <Upload />
                            <input
                                type="file"
                                hidden={true}
                                onChange={props.onChange}
                            />
                        </IconButton>
                        {props.value?.name && (
                            <IconButton onClick={props.onClear}>
                                <Clear />
                            </IconButton>
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default ZUpload;
