import { Control, UseFormResetField } from 'react-hook-form';

export type ProductFormType = {
    colorCode: string;
    description: string | null;
    image: File | null;
    name: string;
    size: number;
    stock: number;
    surface: string;
    type: string;
};

export type RenderFieldType = {
    control: Control<ProductFormType, any>;
    resetField: UseFormResetField<ProductFormType>;
};
