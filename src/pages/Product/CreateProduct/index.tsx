import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ActionButton from './components/ActionButton';
import AlertError from './components/AlertError';
import ImageField from './components/ImageField';
import LabelField from './components/LabelField';
import PriceField from './components/PriceField';
import TypeField from './components/TypeField';

import { formStyle } from './styles';
import useCreateProduct from './hooks';
import ZSuccessAlert from '@/components/ZSuccessAlert';

const CreateProduct = () => {
    const {
        control,
        error,
        handleClear,
        handleSubmit,
        onSubmit,
        resetField,
        successMessage,
    } = useCreateProduct();

    const labelProps = {
        control,
        resetField,
    };

    return (
        <Box>
            <Typography variant="h6">Create Product</Typography>
            <AlertError {...error} />
            <ZSuccessAlert message={successMessage} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={formStyle}>
                    <LabelField {...labelProps} />
                    <PriceField {...labelProps} />
                    <TypeField {...labelProps} />
                    <ImageField {...labelProps} />
                </Box>
                <ActionButton handleClear={handleClear} />
            </form>
        </Box>
    );
};

export default CreateProduct;
