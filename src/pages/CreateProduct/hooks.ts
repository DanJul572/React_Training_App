import { SubmitHandler, useForm } from 'react-hook-form';

import { ProductForm } from './types';

const useCreateProduct = () => {
    const { control, handleSubmit } = useForm<ProductForm>({
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
    };
};

export default useCreateProduct;
