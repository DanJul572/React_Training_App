import { GridPaginationModel } from '@mui/x-data-grid';

export type PropsType = {
  initialPage?: number;
  count: number;
  onChangePage: (data: GridPaginationModel) => void;
};
