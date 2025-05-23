import { SyntheticEvent } from 'react';
import { ProductType, SortType } from '@/types';
import {
  GridFilterModel,
  GridInitialState,
  GridPaginationModel,
  GridSortModel,
} from '@mui/x-data-grid';

export type TablePropertyType = {
  quickFilter: string | null;
  page: number;
  isWithoutImage?: boolean;
  sort: {
    field: string;
    sort: SortType;
  };
};

export type OnLoadType = (tableProperty: TablePropertyType) => void;

export type GetUrlType = (tableProperty: TablePropertyType) => string;

export type DisplayDataType = {
  rows: ProductType[];
  count: number;
};

export type OnWithoutImageChangeType = (
  event: SyntheticEvent,
  checked: boolean
) => void;

export type ProductListReturnType = {
  displayData: DisplayDataType;
  initialState: GridInitialState;
  onAdd: () => void;
  onChangePage: (model: GridPaginationModel) => void;
  onDelete: (id: number) => void;
  onDetail: (id: number) => void;
  onEdit: (id: number) => void;
  onFilter: (model: GridFilterModel) => void;
  onSort: (model: GridSortModel) => void;
  onWithoutImageChange: OnWithoutImageChangeType;
  openDialog: (id: number) => void;
  tableProperty: TablePropertyType;
};
