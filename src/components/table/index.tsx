import Add from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { DataGrid } from '@mui/x-data-grid/DataGrid/DataGrid';
import { GridActionsCellItem } from '@mui/x-data-grid/components/cell/GridActionsCellItem';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { GridRowSelectionModel } from '@mui/x-data-grid/models/gridRowSelectionModel';
import { GridToolbarExport } from '@mui/x-data-grid/components/toolbar/GridToolbarExport';
import { GridToolbarFilterButton } from '@mui/x-data-grid/components/toolbar/GridToolbarFilterButton';
import { GridToolbarQuickFilter } from '@mui/x-data-grid/components/toolbar/GridToolbarQuickFilter';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'firstName', headerName: 'First name', flex: 1 },
    { field: 'lastName', headerName: 'Last name', flex: 1 },
    { field: 'age', headerName: 'Age', flex: 1 },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        cellClassName: 'actions',
        getActions: ({ id }) => {
            return [
                <GridActionsCellItem
                    icon={<Edit />}
                    label="Edit"
                    className="textPrimary"
                    onClick={() => console.log(id)}
                    color="inherit"
                />,
                <GridActionsCellItem
                    icon={<Delete />}
                    label="Delete"
                    onClick={() => console.log(id)}
                    color="inherit"
                />,
            ];
        },
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 55 },
    { id: 6, lastName: 'Melisandre', firstName: 'Parley', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Two', firstName: 'Vincent', age: 70 },
];

const ToolBar = () => {
    return (
        <Box display="flex" padding={2} justifyContent="space-between">
            <Box display="flex" gap={1}>
                <Button color="primary" startIcon={<Add />} size="small">
                    Add record
                </Button>
                <GridToolbarFilterButton />
                <GridToolbarExport />
            </Box>
            <GridToolbarQuickFilter />
        </Box>
    );
};

const ZTable = () => {
    return (
        <div style={{ width: '100%', padding: 10 }}>
            <DataGrid
                autoHeight={true}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={true}
                density="compact"
                slots={{ toolbar: ToolBar }}
                onRowSelectionModelChange={(data: GridRowSelectionModel) => {
                    console.log(data);
                }}
                autosizeOptions={{
                    includeOutliers: true,
                }}
            />
        </div>
    );
};

export default ZTable;
