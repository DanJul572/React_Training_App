import { Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import ZAutoComplete from '@/components/ZAutoComplete';
import translator from '@/helpers/translator';

import useCreateTransaction from './hooks';
import { buttonContainerStyle, fieldContainerStyle } from './styles';

const CreateTransaction = () => {
    const {
        control,
        handleChangeProduct,
        handleSubmit,
        onSubmit,
        productOpttions,
    } = useCreateTransaction();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5">
                {translator('create_transaction')}
            </Typography>
            <Box sx={fieldContainerStyle}>
                <Controller
                    name="product_id"
                    control={control}
                    render={({ field }) => (
                        <ZAutoComplete
                            {...field}
                            label={translator('product')}
                            options={productOpttions}
                            value={field.value?.toString()}
                            onChange={(_event, value) => {
                                handleChangeProduct(field, value?.value);
                            }}
                        />
                    )}
                />
                <Controller
                    name="count"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={translator('count')}
                        />
                    )}
                />
            </Box>
            <Box sx={buttonContainerStyle}>
                <Button type="submit">{translator('submit')}</Button>
            </Box>
        </form>
    );
};

export default CreateTransaction;
