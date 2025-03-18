import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';

const PriceOneField = (props: RenderFieldType) => {
  return (
    <Controller
      name="price_1"
      control={props.control}
      render={({ field }) => (
        <TextField
          {...field}
          type="number"
          label={`${translator('price')} 1`}
        />
      )}
    />
  );
};

export default PriceOneField;
