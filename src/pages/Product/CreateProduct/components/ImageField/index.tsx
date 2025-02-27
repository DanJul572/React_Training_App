import { Controller } from 'react-hook-form';

import ZUpload from '@/components/ZUpload';
import translator from '@/helpers/translator';

import { RenderFieldType } from '../../types';
import useImageField from './hooks';

const ImageField = (props: RenderFieldType) => {
  const { handleChange, hanldeClear } = useImageField(props);

  return (
    <Controller
      name="imageDisplay"
      control={props.control}
      render={({ field }) => (
        <ZUpload
          label={translator('image')}
          name="imageDisplay"
          value={field.value}
          onChange={(e) => handleChange(e, field)}
          onClear={hanldeClear}
        />
      )}
    />
  );
};

export default ImageField;
