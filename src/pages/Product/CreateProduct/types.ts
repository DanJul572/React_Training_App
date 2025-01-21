import { Control, UseFormResetField } from 'react-hook-form';

export type ProductFormType = {
    description: string | null;
    image: File | null;
    name: string;
    size: string;
    stock: number;
    surface: string;
    type: string;
};

export type RenderFieldType = {
    control: Control<ProductFormType, any>;
    resetField: UseFormResetField<ProductFormType>;
};

export type ParamType = {
    id?: number;
};
