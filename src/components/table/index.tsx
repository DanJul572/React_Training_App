import { DataGrid } from '@mui/x-data-grid/DataGrid/DataGrid';
import { GridAutosizeOptions } from '@mui/x-data-grid/hooks/features/columnResize/gridColumnResizeApi';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { GridInitialStateCommunity } from '@mui/x-data-grid/models/gridStateCommunity';
import { GridSlotsComponent } from '@mui/x-data-grid/models/gridSlotsComponent';

import ToolBar from './Toolbar';
import formatedColumns from './formatedColumns';

type Props = {
    columns: readonly GridColDef[];
    id: string;
    rows: any[];
    onRowSelect: (data: any) => void;
    onAdd: () => void;
    onEdit: (data: any) => void;
    onDelete: (data: any) => void;
};

const pageSize: number = 5;
const initialState: GridInitialStateCommunity = {
    pagination: {
        paginationModel: { page: 0, pageSize: pageSize },
    },
};
const autoSizeOption: GridAutosizeOptions = {
    includeOutliers: true,
};

const ZTable = (props: Props) => {
    const columns = formatedColumns(
        props.columns,
        props.onEdit,
        props.onDelete
    );

    const slots: Partial<GridSlotsComponent> = {
        toolbar: () => <ToolBar onAdd={props.onAdd} />,
    };

    return (
        <div style={{ width: '100%', padding: 10 }}>
            <DataGrid
                autoHeight={true}
                autosizeOptions={autoSizeOption}
                checkboxSelection={true}
                columns={columns}
                density="compact"
                getRowId={(row) => row[props.id]}
                initialState={initialState}
                onRowSelectionModelChange={props.onRowSelect}
                rows={props.rows}
                slots={slots}
                pageSizeOptions={[10]}
            />
        </div>
    );
};

export default ZTable;
