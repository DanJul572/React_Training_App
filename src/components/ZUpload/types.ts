import { ChangeEventHandler, MouseEventHandler } from 'react';

export type PropsType = {
    label: string;
    name: string;
    value: File | undefined;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onClear: MouseEventHandler<HTMLButtonElement>;
};
