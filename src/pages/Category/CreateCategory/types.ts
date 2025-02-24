import { Control } from 'react-hook-form';

export type CategoryFormType = {
    name: string;
};

export type RenderFieldType = {
    control: Control<CategoryFormType, any>;
};

export type ParamType = {
    id?: number;
};
