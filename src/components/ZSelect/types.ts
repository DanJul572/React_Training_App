import { OptionType } from '@/types/option';
import { SelectChangeEvent } from '@mui/material/Select';

export type PropsType = {
    label: string;
    name: string;
    options: OptionType[];
    value: string | undefined;
    onChange: (event: SelectChangeEvent<string>) => void;
};
