import { GridColDef } from '@mui/x-data-grid';

export type PropsType = {
    columns: readonly GridColDef[];
    expanded: Record<number, boolean>;
    id: string;
    item: any;
};
