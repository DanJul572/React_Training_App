import translator from '@/helpers/translator';
import { GridColDef } from '@mui/x-data-grid/models/colDef';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: translator('name'),
        width: 110,
    },
    {
        field: 'stock',
        headerName: translator('stock'),
        width: 150,
    },
];

export default columns;
