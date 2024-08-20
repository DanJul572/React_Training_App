import { SubmitHandler, useForm } from 'react-hook-form';

import { ProductFormType } from './types';

const useCreateProduct = () => {
    const { control, handleSubmit, resetField } = useForm<ProductFormType>(
        {
            defaultValues: {
                label: '',
                image: undefined,
            },
        }
    );

    const onSubmit: SubmitHandler<ProductFormType> = (data) => {
        console.log(data);
    };

    return {
        control,
        onSubmit,
        handleSubmit,
        resetField,
    };
};

export default useCreateProduct;
