import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { Props, Option } from './types';

const isOptionEqualToValue = (options: Option, value: Option) => {
    return options.value === value.value;
};

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
            isOptionEqualToValue={isOptionEqualToValue}
        />
    );
};

export default ZAutoComplete;
