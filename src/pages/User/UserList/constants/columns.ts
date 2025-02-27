import translator from '@/helpers/translator';
import { GridColDef } from '@mui/x-data-grid/models/colDef';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: translator('name'),
  },
  {
    field: 'email',
    headerName: translator('email'),
  },
  {
    field: 'role_id',
    headerName: translator('role_id'),
  },
];

export default columns;
