import {
    ControllerFieldState,
    ControllerRenderProps,
    UseFormResetField,
    UseFormStateReturn,
} from 'react-hook-form';

export type ProductForm = {
    label: string;
    description?: string;
    type: string;
    price: number;
    image?: File;
};

export type RenderField<T extends keyof ProductForm> = {
    field: ControllerRenderProps<ProductForm, T>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<ProductForm>;
    resetField: UseFormResetField<ProductForm>;
};
