import { useMediaQuery } from 'react-responsive';
import Paper from '@mui/material/Paper';

import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { GridSlotsComponent } from '@mui/x-data-grid/models/gridSlotsComponent';
import {
  GridRowIdGetter,
  GridSlotsComponentsProps,
} from '@mui/x-data-grid/models';

import { PropsType } from './types';
import { containerStyle } from './styles';

import table from '@/configs/table';

import ZListView from '../ZListView';

import Columns from './components/Columns';
import ToolBar from './components/Toolbar';

const ZTable = (props: PropsType) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // mobile mode
  if (isMobile) {
    return <ZListView {...props} />;
  }

  // default mode
  const columnParams = {
    columns: props.columns,
    enableDeleteButton: props.enableDeleteButton,
    enableDetailButton: props.enableDetailButton,
    enableEditButton: props.enableEditButton,
    onDelete: props.onDelete,
    onDetail: props.onDetail,
    onEdit: props.onEdit,
  };
  const columns = Columns(columnParams);

  const slots: Partial<GridSlotsComponent> = {
    toolbar: () => (
      <ToolBar
        enableAddButton={props.enableAddButton}
        enableFilterButton={props.enableFilterButton}
        onAdd={props.onAdd}
      />
    ),
  };

  const slotProps: Partial<GridSlotsComponentsProps> = {
    pagination: { showFirstButton: true, showLastButton: true },
  };

  const getRowId: GridRowIdGetter<any> = (row) => row[props.id];

  return (
    <Paper sx={containerStyle} data-testid="ztable">
      <DataGrid
        localeText={table.localeText}
        autosizeOptions={table.autoSizeOption}
        checkboxSelection={props.enableCheckboxSelection}
        columns={columns}
        density={table.density}
        filterDebounceMs={table.filterDebounceMs}
        filterMode={table.gridMode}
        getRowId={getRowId}
        initialState={table.initialState}
        onFilterModelChange={props.onFilter}
        onPaginationModelChange={props.onChangePage}
        onRowSelectionModelChange={props.onSelect}
        onSortModelChange={props.onSort}
        pageSizeOptions={table.pageSizeOptions}
        paginationMode={table.gridMode}
        rowCount={props.count}
        rows={props.rows}
        slots={slots}
        slotProps={slotProps}
        sortingMode={table.gridMode}
      />
    </Paper>
  );
};

export default ZTable;
