import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ActionButton from './components/ActionButton';
import AlertMessage from './components/AlertMessage';
import ColorCodeField from './components/ColorCodeField';
import ImageField from './components/ImageField';
import NameField from './components/NameField';
import SizeField from './components/SizeField';
import StockField from './components/StockField';
import SurfaceField from './components/Surface';
import TypeField from './components/TypeField';

import { formStyle } from './styles';
import useCreateProduct from './hooks';

const CreateProduct = () => {
    const {
        control,
        onBack,
        onClear,
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
                    <NameField {...labelProps} />
                    <TypeField {...labelProps} />
                    <SizeField {...labelProps} />
                    <ColorCodeField {...labelProps} />
                    <SurfaceField {...labelProps} />
                    <StockField {...labelProps} />
                    <ImageField {...labelProps} />
                </Box>
                <ActionButton onBack={onBack} onClear={onClear} />
            </form>
        </Box>
    );
};

export default CreateProduct;
