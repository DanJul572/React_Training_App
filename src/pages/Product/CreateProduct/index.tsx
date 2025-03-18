import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import ActionButton from './components/ActionButton';
import CategoryField from './components/CategoryField';
import ImageField from './components/ImageField';
import NameField from './components/NameField';
import PriceOneField from './components/PriceOneField';
import PriceTwoField from './components/PriceTwoField';
import SizeField from './components/SizeField';
import StockField from './components/StockField';
import SurfaceField from './components/Surface';
import TypeField from './components/TypeField';

import { formStyle } from './styles';
import useCreateProduct from './hooks';

const CreateProduct = () => {
  const {
    categoryOptions,
    control,
    handleChangeCategory,
    handleSubmit,
    onBack,
    onClear,
    onSubmit,
    resetField,
    setValue,
  } = useCreateProduct();

  const fieldProps = {
    control,
    resetField,
    setValue,
  };

  return (
    <Box>
      <Typography variant="h6">{translator('create_product')}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={formStyle}>
          <NameField {...fieldProps} />
          <TypeField {...fieldProps} />
          <SizeField {...fieldProps} />
          <SurfaceField {...fieldProps} />
          <StockField {...fieldProps} />
          <PriceOneField {...fieldProps} />
          <PriceTwoField {...fieldProps} />
          <CategoryField
            {...fieldProps}
            categoryOptions={categoryOptions}
            handleChangeCategory={handleChangeCategory}
          />
          <ImageField {...fieldProps} />
        </Box>
        <ActionButton onBack={onBack} onClear={onClear} />
      </form>
    </Box>
  );
};

export default CreateProduct;
