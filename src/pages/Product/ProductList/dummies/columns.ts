import translator from '@/helpers/translator';
import { GridColDef } from '@mui/x-data-grid/models/colDef';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'name',
        headerName: translator('name'),
        width: 150,
    },
    {
        field: 'size',
        headerName: translator('size'),
        width: 150,
    },
    {
        field: 'type',
        headerName: translator('type'),
        width: 100,
    },
    {
        field: 'stock',
        headerName: translator('stock'),
        width: 100,
    },
];

export default columns;
