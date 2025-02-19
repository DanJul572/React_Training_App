import translator from '@/helpers/translator';
import { GridColDef } from '@mui/x-data-grid/models/colDef';

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: translator('name'),
    },
    {
        field: 'size',
        headerName: translator('size'),
    },
    {
        field: 'type',
        headerName: translator('type'),
    },
    {
        field: 'stock',
        headerName: translator('stock'),
    },
];

export default columns;
