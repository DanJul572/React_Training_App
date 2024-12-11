import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { PropsType } from './types';

const ZAutoComplete = (props: PropsType) => {
    return (
        <Autocomplete
            data-testid="zautocomplete"
            options={props.options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={props.label}
                    name={props.name}
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                />
            )}
            onChange={props.onChange}
        />
    );
};

export default ZAutoComplete;
