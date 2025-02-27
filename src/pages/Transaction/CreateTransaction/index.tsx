import { Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import ZAutoComplete from '@/components/ZAutoComplete';
import ZSelect from '@/components/ZSelect';

import translator from '@/helpers/translator';

import useCreateTransaction from './hooks';
import { buttonContainerStyle, fieldContainerStyle } from './styles';

const CreateTransaction = () => {
  const {
    categoryFilterValue,
    categoryOptions,
    control,
    handleChangeCategoryFilter,
    handleChangeProduct,
    handleSubmit,
    onSubmit,
    productOptions,
    reset,
    transacttionTypeOptions,
  } = useCreateTransaction();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6">
        {translator('create_transaction')}
      </Typography>
      <Box sx={fieldContainerStyle}>
        <Controller
          name="transaction_type_id"
          control={control}
          render={({ field }) => (
            <ZSelect
              {...field}
              label={translator('transaction_type')}
              options={transacttionTypeOptions}
            />
          )}
        />
        <ZAutoComplete
          name="category"
          label={translator('category')}
          options={categoryOptions}
          value={categoryFilterValue}
          onChange={(_event, value) => {
            handleChangeCategoryFilter(value);
          }}
        />
        <Controller
          name="product_id"
          control={control}
          render={({ field }) => (
            <ZAutoComplete
              {...field}
              label={translator('product')}
              options={productOptions}
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
            <TextField {...field} label={translator('count')} />
          )}
        />
      </Box>
      <Box sx={buttonContainerStyle}>
        <Button color="secondary" onClick={() => reset()} type="button">
          {translator('clear')}
        </Button>
        <Button type="submit">{translator('submit')}</Button>
      </Box>
    </form>
  );
};

export default CreateTransaction;
