import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';

const PasswordField = (props: RenderFieldType) => {
  return (
    <Controller
      name="password"
      control={props.control}
      render={({ field }) => (
        <TextField
          {...field}
          label={translator('password')}
          type="password"
        />
      )}
    />
  );
};

export default PasswordField;
