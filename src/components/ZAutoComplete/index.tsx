import { useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { OptionType } from '@/types';

import { PropsType } from './types';

const ZAutoComplete = (props: PropsType) => {
  const [value, setValue] = useState<OptionType>({
    label: '',
    value: '',
  });

  useEffect(() => {
    const newValue = props.options.find(
      (item) => item.value.toString() === props.value?.toString()
    );
    if (newValue) {
      setValue(newValue);
    } else {
      setValue({
        label: '',
        value: '',
      });
    }
  }, [props.value]);

  return (
    <Autocomplete
      data-testid="zautocomplete"
      options={props.options}
      value={value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          name={props.name}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={props.value}
        />
      )}
      onChange={props.onChange}
      getOptionKey={(option) => option.value}
    />
  );
};

export default ZAutoComplete;
