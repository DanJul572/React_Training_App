import {
  GridFilterModel,
  GridInitialState,
  GridPaginationModel,
  GridRowSelectionModel,
  GridSortModel,
} from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid/models/colDef';

export type PropsType = {
  columns: readonly GridColDef[];
  count: number;
  enableAddButton?: boolean;
  enableCheckboxSelection?: boolean;
  enableDeleteButton?: boolean;
  enableDetailButton?: boolean;
  enableEditButton?: boolean;
  enableFilterButton?: boolean;
  id: string;
  initialState?: GridInitialState;
  listTitleFormat: string;
  onAdd?: () => void;
  onChangePage: (data: GridPaginationModel) => void;
  onDelete?: (data: any) => void;
  onDetail?: (data: any) => void;
  onEdit?: (data: any) => void;
  onFilter?: (data: GridFilterModel) => void;
  onSelect?: (data: GridRowSelectionModel) => void;
  onSort: (data: GridSortModel) => void;
  rows: any[];
};
