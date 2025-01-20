import { GridColDef } from '@mui/x-data-grid/models/colDef';

type ParamsType = {
    columns: readonly GridColDef[];
    enableDeleteButton?: boolean;
    enableEditButton?: boolean;
    onDelete?: (id: any) => void;
    onDetail: (id: any) => void;
    onEdit?: (id: any) => void;
};

export type PropsType = (param: ParamsType) => GridColDef[];
