import { Control, UseFormResetField } from 'react-hook-form';

export type ProductFormType = {
    label: string;
    description?: string;
    type: string;
    price: number;
    image?: File;
};

export type RenderFieldType = {
    control: Control<ProductFormType, any>;
    resetField: UseFormResetField<ProductFormType>;
};
