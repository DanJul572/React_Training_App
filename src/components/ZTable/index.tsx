import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { GridSlotsComponent } from '@mui/x-data-grid/models/gridSlotsComponent';

import { Props } from './types';
import table from '@/configs/table';

import formatedColumns from './components/formatedColumns';
import ToolBar from './components/Toolbar';

const ZTable = (props: Props) => {
    const columns = formatedColumns(
        props.columns,
        props.onEdit,
        props.onDelete
    );

    const slots: Partial<GridSlotsComponent> = {
        toolbar: () => <ToolBar onAdd={props.onAdd} />,
    };

    const getRowId = (row: any) => row[props.id];

    return (
        <Box sx={{ width: '100%' }} data-testid="ztable">
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
        </Box>
    );
};

export default ZTable;
