import translator from '@/helpers/translator';
import { GridColDef } from '@mui/x-data-grid/models/colDef';

const columns: GridColDef[] = [
    { field: 'transaction_id', headerName: 'ID', width: 50 },
    {
        field: 'user_name',
        headerName: translator('user'),
        width: 150,
    },
    {
        field: 'product_name',
        headerName: translator('product'),
        width: 150,
    },
    {
        field: 'product_type',
        headerName: translator('type'),
        width: 150,
    },
    {
        field: 'transaction_count',
        headerName: translator('count'),
        width: 150,
    },
];

export default columns;
