import {
    Control,
    UseFormResetField,
    UseFormSetValue,
} from 'react-hook-form';

export type CategoryFormType = {
    name: string;
};

export type RenderFieldType = {
    control: Control<CategoryFormType, any>;
    resetField: UseFormResetField<CategoryFormType>;
    setValue: UseFormSetValue<CategoryFormType>;
};

export type ParamType = {
    id?: number;
};
