import { ChangeEventHandler, MouseEventHandler } from 'react';

export type PropsType = {
    label: string;
    name: string;
    value: File | null;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onClear: MouseEventHandler<HTMLButtonElement>;
};
