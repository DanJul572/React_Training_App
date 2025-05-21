import { ToolbarButton, ColumnsPanelTrigger } from '@mui/x-data-grid';

import Tooltip from '@mui/material/Tooltip';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

const CustomColumnsPanel = () => {
  return (
    <Tooltip title="Columns">
      <ColumnsPanelTrigger render={<ToolbarButton />}>
        <ViewColumnIcon fontSize="small" />
      </ColumnsPanelTrigger>
    </Tooltip>
  );
};

export default CustomColumnsPanel;
