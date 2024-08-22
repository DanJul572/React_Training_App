import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LabelField from './components/LabelField';
import ImageField from './components/ImageField';
import TypeField from './components/TypeField';
import ActionButton from './components/ActionButton';

import { formStyle } from './styles';

import useCreateProduct from './hooks';

const CreateProduct = () => {
    const { resetField, handleSubmit, onSubmit, control, handleClear } =
        useCreateProduct();

    const labelProps = {
        control,
        resetField,
    };

    return (
        <Box>
            <Typography variant="h6">Create Product</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={formStyle}>
                    <LabelField {...labelProps} />
                    <ImageField {...labelProps} />
                    <TypeField {...labelProps} />
                </Box>
                <ActionButton handleClear={handleClear} />
            </form>
        </Box>
    );
};

export default CreateProduct;
