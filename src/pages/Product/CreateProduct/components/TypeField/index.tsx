import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';

const TypeField = (props: RenderFieldType) => {
  return (
    <Controller
      name="type"
      control={props.control}
      render={({ field }) => (
        <TextField {...field} label={translator('type')} />
      )}
    />
  );
};

export default TypeField;
