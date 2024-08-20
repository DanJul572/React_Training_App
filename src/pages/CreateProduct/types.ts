import {
    ControllerFieldState,
    ControllerRenderProps,
    UseFormResetField,
    UseFormStateReturn,
} from 'react-hook-form';

export type ProductFormType = {
    label: string;
    description?: string;
    type: string;
    price: number;
    image?: File;
};

export type RenderFieldType<T extends keyof ProductFormType> = {
    field: ControllerRenderProps<ProductFormType, T>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<ProductFormType>;
    resetField: UseFormResetField<ProductFormType>;
};
