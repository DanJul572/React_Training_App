import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import translator from '@/helpers/translator';

import { PropsType } from './types';
import useToolbar from './hooks';
import { addButtonStyle } from './styles';

const Toolbar = (props: PropsType) => {
  const { searchTerm, handleChange } = useToolbar(props);
  return (
    <Box>
      <TextField
        placeholder={translator('search') + '...'}
        variant="outlined"
        fullWidth
        value={searchTerm || ''}
        onChange={handleChange}
      />
      {props.enableAddButton && (
        <Button
          variant="contained"
          color="primary"
          style={addButtonStyle}
          onClick={props.onAdd}
        >
          {translator('add_record')}
        </Button>
      )}
    </Box>
  );
};

export default Toolbar;
