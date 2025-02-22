import translator from '@/helpers/translator';
import { GridColDef } from '@mui/x-data-grid/models/colDef';

const columns: GridColDef[] = [
    {
        field: 'product_name',
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
    {
        field: 'price_1',
        headerName: translator('price_1'),
    },
    {
        field: 'price_2',
        headerName: translator('price_2'),
    },
    {
        field: 'category_name',
        headerName: translator('category'),
    },
];

export default columns;
