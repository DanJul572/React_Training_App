import { ToolbarButton, FilterPanelTrigger } from '@mui/x-data-grid';

import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';

const CustomFilterPanel = () => {
  return (
    <Tooltip title="Filters">
      <FilterPanelTrigger render={<ToolbarButton />}>
        <FilterListIcon fontSize="small" />
      </FilterPanelTrigger>
    </Tooltip>
  );
};

export default CustomFilterPanel;
