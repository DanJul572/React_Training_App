import {
    Control,
    UseFormResetField,
    UseFormSetValue,
} from 'react-hook-form';

export type ProductFormType = {
    description: string | null;
    image: string | ArrayBuffer | null;
    imageDisplay: File | null;
    name: string;
    size: string;
    stock: number;
    surface: string;
    type: string;
};

export type RenderFieldType = {
    control: Control<ProductFormType, any>;
    resetField: UseFormResetField<ProductFormType>;
    setValue: UseFormSetValue<ProductFormType>;
};

export type ParamType = {
    id?: number;
};
