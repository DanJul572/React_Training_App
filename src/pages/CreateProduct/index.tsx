import { Controller } from 'react-hook-form';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import LabelField from './components/LabelField';
import ImageField from './components/ImageField';
import TypeField from './components/TypeField';

import { containerButtonStyle, formStyle } from './styles';

import useCreateProduct from './hooks';

const CreateProduct = () => {
    const { resetField, handleSubmit, onSubmit, control } =
        useCreateProduct();

    return (
        <Box>
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
            </form>
            <Box sx={containerButtonStyle}>
                <Button type="submit">Submit</Button>
            </Box>
        </Box>
    );
};

export default CreateProduct;
