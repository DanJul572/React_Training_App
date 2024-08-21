import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LabelField from './components/LabelField';
import ImageField from './components/ImageField';
import TypeField from './components/TypeField';

import { containerButtonStyle, formStyle } from './styles';

import useCreateProduct from './hooks';

const CreateProduct = () => {
    const { resetField, handleSubmit, onSubmit, control } =
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
                <Box sx={containerButtonStyle}>
                    <Button type="submit">Submit</Button>
                </Box>
            </form>
        </Box>
    );
};

export default CreateProduct;
