import { GridColDef } from '@mui/x-data-grid/models/colDef';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'stock',
        headerName: 'Stock',
        width: 150,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 110,
    },
];

export default columns;
