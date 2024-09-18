import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ActionButton from './components/ActionButton';
import AlertError from './components/AlertError';
import ImageField from './components/ImageField';
import LabelField from './components/LabelField';
import TypeField from './components/TypeField';

import { formStyle } from './styles';
import useCreateProduct from './hooks';

const CreateProduct = () => {
    const {
        control,
        error,
        handleClear,
        handleSubmit,
        onSubmit,
        resetField,
    } = useCreateProduct();

    const labelProps = {
        control,
        resetField,
    };

    return (
        <Box>
            <Typography variant="h6">Create Product</Typography>
            <AlertError {...error} />
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
