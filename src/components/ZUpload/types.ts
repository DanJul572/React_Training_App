import { ChangeEventHandler, MouseEventHandler } from 'react';

export type PropsType = {
    label: string;
    value: File | undefined;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onClear: MouseEventHandler<HTMLButtonElement>;
};
