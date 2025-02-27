import { Controller } from 'react-hook-form';

import ZAutoComplete from '@/components/ZAutoComplete';

import translator from '@/helpers/translator';

import { RenderCategoryFieldType } from '../../types';

const CategoryField = (props: RenderCategoryFieldType) => {
  return (
    <Controller
      name="category_id"
      control={props.control}
      render={({ field }) => (
        <ZAutoComplete
          {...field}
          label={translator('category')}
          options={props.categoryOptions}
          value={field.value?.toString()}
          onChange={(_event, value) => {
            props.handleChangeCategory(field, value?.value);
          }}
        />
      )}
    />
  );
};

export default CategoryField;
