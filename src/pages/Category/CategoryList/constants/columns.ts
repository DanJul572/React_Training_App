import translator from '@/helpers/translator';
import { GridColDef } from '@mui/x-data-grid/models/colDef';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: translator('name'),
  },
];

export default columns;
