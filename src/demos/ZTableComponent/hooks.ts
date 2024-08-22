import { GridFilterModel } from '@mui/x-data-grid/models/gridFilterModel';
import { GridPaginationModel } from '@mui/x-data-grid/models/gridPaginationProps';
import { GridRowSelectionModel } from '@mui/x-data-grid/models/gridRowSelectionModel';
import { GridSortModel } from '@mui/x-data-grid/models/gridSortModel';

import { PeopleType } from './types';

const useZTableComponent = () => {
    const onAdd = (): void => {
        console.log('onAdd');
    };

    const onChangePage = (data: GridPaginationModel): void => {
        console.log('onChagePage', data.page);
    };

    const onDelete = (data: PeopleType): void => {
        console.log('onDelete', data);
    };

    const onEdit = (data: PeopleType): void => {
        console.log('onEdit', data);
    };

    const onFilter = (data: GridFilterModel): void => {
        console.log('onFilter', data);
    };

    const onSelect = (data: GridRowSelectionModel): void => {
        console.log('onSelect', data);
    };

    const onSort = (data: GridSortModel): void => {
        console.log('onSort', data);
    };

    return {
        onAdd,
        onChangePage,
        onDelete,
        onEdit,
        onFilter,
        onSelect,
        onSort,
    };
};

export default useZTableComponent;
