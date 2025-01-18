import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import ActionButton from './components/ActionButton';
import ColorCodeField from './components/ColorCodeField';
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
    } = useCreateProduct();

    const labelProps = {
        control,
        resetField,
    };

    return (
        <Box>
            <Typography variant="h6">
                {translator('create_product')}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={formStyle}>
                    <NameField {...labelProps} />
                    <TypeField {...labelProps} />
                    <SizeField {...labelProps} />
                    <ColorCodeField {...labelProps} />
                    <SurfaceField {...labelProps} />
                    <StockField {...labelProps} />
                </Box>
                <ActionButton onBack={onBack} onClear={onClear} />
            </form>
        </Box>
    );
};

export default CreateProduct;
