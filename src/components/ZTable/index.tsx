import Paper from '@mui/material/Paper';

import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { GridSlotsComponent } from '@mui/x-data-grid/models/gridSlotsComponent';
import { GridRowIdGetter } from '@mui/x-data-grid/models';

import { PropsType } from './types';

import table from '@/configs/table';

import Columns from './components/Columns';
import ToolBar from './components/Toolbar';

import { ZTableContainerStyle } from './styles';

const ZTable = (props: PropsType) => {
    const columns = Columns(props.columns, props.onEdit, props.onDelete);

    const slots: Partial<GridSlotsComponent> = {
        toolbar: () => <ToolBar onAdd={props.onAdd} />,
    };

    const getRowId: GridRowIdGetter<any> = (row) => row[props.id];

    return (
        <Paper sx={ZTableContainerStyle} data-testid="ztable">
            <DataGrid
                autoHeight={true}
                autosizeOptions={table.autoSizeOption}
                checkboxSelection={true}
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
                rowCount={props.rows.length}
                rows={props.rows}
                slots={slots}
                sortingMode={table.gridMode}
            />
        </Paper>
    );
};

export default ZTable;
