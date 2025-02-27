import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import ActionButton from './components/ActionButton';
import NameField from './components/NameField';

import { formStyle } from './styles';
import useCreateCategory from './hooks';

const CreateCategory = () => {
  const { control, handleSubmit, onBack, onClear, onSubmit } =
    useCreateCategory();

  return (
    <Box>
      <Typography variant="h6">{translator('create_category')}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={formStyle}>
          <NameField control={control} />
        </Box>
        <ActionButton onBack={onBack} onClear={onClear} />
      </form>
    </Box>
  );
};

export default CreateCategory;
