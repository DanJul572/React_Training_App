import { Controller } from 'react-hook-form';

import Button from '@mui/material/Button';

import { formStyle } from './styles';

import LabelField from './components/LabelField';
import ImageField from './components/ImageField';

import useCreateProduct from './hooks';

const CreateProduct = () => {
    const { handleSubmit, onSubmit, control } = useCreateProduct();

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            <Controller
                name="label"
                control={control}
                render={LabelField}
            />
            <Controller
                name="image"
                control={control}
                render={ImageField}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default CreateProduct;
