import { GridFilterModel } from '@mui/x-data-grid';

export type PropsType = {
    enableAddButton?: boolean;
    enableFilterButton?: boolean;
    onAdd?: () => void;
    onFilter?: (data: GridFilterModel) => void;
};
