import { Control, UseFormResetField } from 'react-hook-form';

export type ProductFormType = {
    description: string | null;
    image: File | null;
    label: string;
    price: number;
    type: string;
};

export type RenderFieldType = {
    control: Control<ProductFormType, any>;
    resetField: UseFormResetField<ProductFormType>;
};
