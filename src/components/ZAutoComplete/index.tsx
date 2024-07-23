import { SyntheticEvent } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { Props, Option } from './types';

const isOptionEqualToValue = (options: Option, value: Option) => {
    return options.value === value.value;
};

const ZAutoComplete = (props: Props) => {
    const handleChange = (
        _event: SyntheticEvent,
        value: Option | null
    ): void => {
        props.onChange(value);
    };

    return (
        <Autocomplete
            options={props.options}
            renderInput={(params) => (
                <TextField {...params} label={props.label} />
            )}
            onChange={handleChange}
            isOptionEqualToValue={isOptionEqualToValue}
        />
    );
};

export default ZAutoComplete;
