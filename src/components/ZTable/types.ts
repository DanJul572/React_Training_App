import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { GridFilterModel } from '@mui/x-data-grid/models/gridFilterModel';
import { GridPaginationModel } from '@mui/x-data-grid/models/gridPaginationProps';
import { GridRowSelectionModel } from '@mui/x-data-grid/models/gridRowSelectionModel';
import { GridSortModel } from '@mui/x-data-grid/models/gridSortModel';
import { GridInitialStateCommunity } from '@mui/x-data-grid/models/gridStateCommunity';

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
  initialState?: GridInitialStateCommunity;
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
