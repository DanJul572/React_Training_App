import { SubmitHandler, useForm } from 'react-hook-form';

import { ProductFormType } from './types';

const useCreateProduct = () => {
    const { control, handleSubmit, resetField, reset } =
        useForm<ProductFormType>({
            defaultValues: {
                label: '',
                image: undefined,
            },
        });

    const onSubmit: SubmitHandler<ProductFormType> = () => {};

    const handleClear = () => {
        reset();
    };

    return {
        control,
        handleSubmit,
        onSubmit,
        resetField,
        handleClear,
    };
};

export default useCreateProduct;
