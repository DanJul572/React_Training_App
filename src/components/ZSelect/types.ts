import { SelectChangeEvent } from '@mui/material/Select';
import { OptionType } from '@/types';

export type PropsType = {
    label: string;
    name: string;
    options: OptionType[];
    value: string | undefined;
    onChange: (event: SelectChangeEvent<string>) => void;
};
