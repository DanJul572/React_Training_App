import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { PropsType } from './types';

import useZAutoComplete from './hooks';

const ZAutoComplete = (props: PropsType) => {
    const { handleChange } = useZAutoComplete(props);

    return (
        <Autocomplete
            options={props.options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={props.label}
                    name={props.name}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            )}
            onChange={handleChange}
        />
    );
};

export default ZAutoComplete;
