import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { GridFilterModel } from '@mui/x-data-grid/models/gridFilterModel';
import { GridPaginationModel } from '@mui/x-data-grid/models/gridPaginationProps';
import { GridRowSelectionModel } from '@mui/x-data-grid/models/gridRowSelectionModel';
import { GridSortModel } from '@mui/x-data-grid/models/gridSortModel';

export type Props = {
    columns: readonly GridColDef[];
    id: string;
    rows: any[];
    onAdd: () => void;
    onChangePage: (data: GridPaginationModel) => void;
    onDelete: (data: any) => void;
    onEdit: (data: any) => void;
    onFilter: (data: GridFilterModel) => void;
    onSelect: (data: GridRowSelectionModel) => void;
    onSort: (data: GridSortModel) => void;
};
