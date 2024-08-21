import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { PropsType } from './types';

const ZSelect = (props: PropsType) => {
    return (
        <FormControl fullWidth={true}>
            <InputLabel>{props.label}</InputLabel>
            <Select
                label={props.label}
                name={props.name}
                value={props.value || ''}
                onChange={props.onChange}
                notched
            >
                {props.options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default ZSelect;
