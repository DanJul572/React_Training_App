import { GridColDef } from '@mui/x-data-grid/models/colDef';

export type PropsType = (
    columns: readonly GridColDef[],
    onEdit: (id: any) => void,
    onDelete: (id: any) => void
) => GridColDef[];
