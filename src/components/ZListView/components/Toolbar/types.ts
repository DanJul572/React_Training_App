import { GridFilterModel } from '@mui/x-data-grid';

export type PropsType = {
  enableAddButton?: boolean;
  enableFilterButton?: boolean;
  initialSearch?: string;
  onAdd?: () => void;
  onFilter?: (data: GridFilterModel) => void;
};
