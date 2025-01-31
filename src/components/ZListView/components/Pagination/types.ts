import { GridPaginationModel } from '@mui/x-data-grid';

export type PropsType = {
    count: number;
    onChangePage: (data: GridPaginationModel) => void;
};
