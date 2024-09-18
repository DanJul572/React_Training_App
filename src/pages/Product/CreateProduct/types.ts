import { Control, UseFormResetField } from 'react-hook-form';

export type ProductFormType = {
    description?: string;
    image?: File;
    label: string;
    price: number;
    type: string;
};

export type RenderFieldType = {
    control: Control<ProductFormType, any>;
    resetField: UseFormResetField<ProductFormType>;
};
