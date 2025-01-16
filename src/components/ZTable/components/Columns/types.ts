import { GridColDef } from '@mui/x-data-grid/models/colDef';

export type PropsType = (
    columns: readonly GridColDef[],
    onDelete: (id: any) => void,
    onDetail: (id: any) => void,
    onEdit: (id: any) => void
) => GridColDef[];
