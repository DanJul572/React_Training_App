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
        field: 'product_size',
        headerName: translator('size'),
    },
    {
        field: 'transaction_type_name',
        headerName: translator('transaction_type'),
    },
    {
        field: 'transaction_count',
        headerName: translator('count'),
    },
    {
        field: 'transaction_created_at',
        headerName: translator('created_at'),
    },
];

export default columns;
