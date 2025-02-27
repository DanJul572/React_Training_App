import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import ActionButton from './components/ActionButton';
import EmailField from './components/EmailField';
import NameField from './components/NameField';
import PasswordField from './components/PasswordField';

import { formStyle } from './styles';
import useCreateUser from './hooks';
import RoleField from './components/RoleField';

const CreateUser = () => {
  const {
    control,
    handleSubmit,
    onBack,
    onClear,
    onSubmit,
    resetField,
    setValue,
  } = useCreateUser();

  const labelProps = {
    control,
    resetField,
    setValue,
  };

  return (
    <Box>
      <Typography variant="h6">{translator('create_user')}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={formStyle}>
          <NameField {...labelProps} />
          <EmailField {...labelProps} />
          <PasswordField {...labelProps} />
          <RoleField {...labelProps} />
        </Box>
        <ActionButton onBack={onBack} onClear={onClear} />
      </form>
    </Box>
  );
};

export default CreateUser;
