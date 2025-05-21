import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import Add from '@mui/icons-material/Add';

import { Toolbar as MuiToolbar } from '@mui/x-data-grid';

import translator from '@/helpers/translator';

import { PropsType } from './types';
import { containerStyle, subContainerStyle } from './styles';

import CustomQuickFilter from './components/CustomQuickFilter';
import CustomColumnsPanel from './components/CustomColumnsPanel';
import CustomFilterPanel from './components/CustomFilterPanel';

const ToolBar = (props: PropsType) => {
  return (
    <MuiToolbar style={containerStyle}>
      <Box>
        {props.enableAddButton && (
          <Tooltip title={translator('add_record')}>
            <Button
              color="primary"
              startIcon={<Add />}
              size="small"
              onClick={props.onAdd}
            >
              {translator('add_record')}
            </Button>
          </Tooltip>
        )}
      </Box>
      <Box sx={subContainerStyle}>
        {props.enableFilterButton && <CustomFilterPanel />}
        <CustomColumnsPanel />
        <CustomQuickFilter />
      </Box>
    </MuiToolbar>
  );
};

export default ToolBar;
