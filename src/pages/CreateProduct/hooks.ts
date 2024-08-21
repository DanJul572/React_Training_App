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

    const onSubmit: SubmitHandler<ProductFormType> = (data) => {
        console.log(data);
        reset();
    };

    return {
        control,
        handleSubmit,
        onSubmit,
        resetField,
    };
};

export default useCreateProduct;
