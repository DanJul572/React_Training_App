import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { Props } from './types';

const ZAutoComplete = (props: Props) => {
    return (
        <Autocomplete
            options={props.options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={props.label}
                    name={props.name}
                />
            )}
        />
    );
};

export default ZAutoComplete;
