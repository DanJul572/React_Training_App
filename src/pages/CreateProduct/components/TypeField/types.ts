import { OptionType } from '@/types/option';
import { SyntheticEvent } from 'react';

export type handleChangeType = (
    event: SyntheticEvent,
    value: OptionType | null
) => void;
