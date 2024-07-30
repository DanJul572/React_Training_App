import { GridFilterModel } from '@mui/x-data-grid/models/gridFilterModel';
import { GridPaginationModel } from '@mui/x-data-grid/models/gridPaginationProps';
import { GridRowSelectionModel } from '@mui/x-data-grid/models/gridRowSelectionModel';
import { GridSortModel } from '@mui/x-data-grid/models/gridSortModel';

import ZTable from '../../components/ZTable';

import { People } from './types';
import columns from './dummy/columns';
import rows from './dummy/rows';

const onAdd = (): void => {
    console.log('onAdd');
};

const onChangePage = (data: GridPaginationModel): void => {
    console.log('onChagePage', data.page);
};

const onDelete = (data: People): void => {
    console.log('onDelete', data);
};

const onEdit = (data: People): void => {
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

const TableDemo = () => {
    return (
        <ZTable
            columns={columns}
            rows={rows}
            id="id"
            onAdd={onAdd}
            onChangePage={onChangePage}
            onDelete={onDelete}
            onEdit={onEdit}
            onFilter={onFilter}
            onSelect={onSelect}
            onSort={onSort}
        />
    );
};

export default TableDemo;
