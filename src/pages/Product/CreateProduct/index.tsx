import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ActionButton from './components/ActionButton';
import AlertMessage from './components/AlertMessage';
import ImageField from './components/ImageField';
import LabelField from './components/LabelField';
import PriceField from './components/PriceField';
import TypeField from './components/TypeField';

import { formStyle } from './styles';
import useCreateProduct from './hooks';

const CreateProduct = () => {
    const {
        control,
        handleClear,
        handleSubmit,
        onSubmit,
        resetField,
        showAlert,
    } = useCreateProduct();

    const labelProps = {
        control,
        resetField,
    };

    return (
        <Box>
            <Typography variant="h6">Create Product</Typography>
            <AlertMessage {...showAlert} />
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
