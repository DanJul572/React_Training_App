import translator from '@/helpers/translator';
import { GridColDef } from '@mui/x-data-grid/models/colDef';

const columns: GridColDef[] = [
    {
        field: 'user_name',
        headerName: translator('user'),
    },
    {
        field: 'product_name',
        headerName: translator('product'),
    },
    {
        field: 'product_type',
        headerName: translator('type'),
    },
    {
        field: 'transaction_count',
        headerName: translator('count'),
    },
];

export default columns;
