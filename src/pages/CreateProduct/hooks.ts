import { SubmitHandler, useForm } from 'react-hook-form';

import { ProductForm } from './types';

const useCreateProduct = () => {
    const { control, handleSubmit, resetField } = useForm<ProductForm>({
        defaultValues: {
            label: '',
            image: undefined,
        },
    });

    const onSubmit: SubmitHandler<ProductForm> = (data) => {
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
