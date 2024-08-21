import { Controller } from 'react-hook-form';

import Button from '@mui/material/Button';

import { formStyle } from './styles';

import LabelField from './components/LabelField';
import ImageField from './components/ImageField';
import TypeField from './components/TypeField';

import useCreateProduct from './hooks';

const CreateProduct = () => {
    const { resetField, handleSubmit, onSubmit, control } =
        useCreateProduct();

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            <Controller
                name="label"
                control={control}
                render={({ field, fieldState, formState }) => (
                    <LabelField
                        field={field}
                        resetField={resetField}
                        fieldState={fieldState}
                        formState={formState}
                    />
                )}
            />
            <Controller
                name="image"
                control={control}
                render={({ field, fieldState, formState }) => (
                    <ImageField
                        field={field}
                        resetField={resetField}
                        fieldState={fieldState}
                        formState={formState}
                    />
                )}
            />
            <Controller
                name="type"
                control={control}
                render={({ field, fieldState, formState }) => (
                    <TypeField
                        field={field}
                        resetField={resetField}
                        fieldState={fieldState}
                        formState={formState}
                    />
                )}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default CreateProduct;
