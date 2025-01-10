import { SyntheticEvent } from 'react';
import { OptionType } from '@/types';

export type PropsType = {
    label: string;
    name: string;
    options: OptionType[];
    onChange: handleChangeType;
};

export type handleChangeType = (
    event: SyntheticEvent,
    value: OptionType | null
) => void;
