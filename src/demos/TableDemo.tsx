import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { GridFilterModel } from '@mui/x-data-grid/models/gridFilterModel';
import { GridPaginationModel } from '@mui/x-data-grid/models/gridPaginationProps';
import { GridRowSelectionModel } from '@mui/x-data-grid/models/gridRowSelectionModel';
import { GridSortModel } from '@mui/x-data-grid/models/gridSortModel';

import ZTable from '../components/table';

type People = {
    id: number;
    firstName?: string | null;
    lastName?: string | null;
    age: number;
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 110,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        width: 160,
        valueGetter: (_value, row) =>
            `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows: People[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: null, firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: null, age: 23 },
    { id: 6, lastName: 'Melisandre', firstName: 'Yoin', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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
