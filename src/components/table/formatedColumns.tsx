import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

import { GridActionsCellItem } from '@mui/x-data-grid/components/cell/GridActionsCellItem';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

const formatedColumns = (
    columns: readonly GridColDef[],
    onEdit: (id: any) => void,
    onDelete: (id: any) => void
): GridColDef[] => {
    return [
        ...columns,
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            cellClassName: 'actions',
            getActions: (data) => {
                return [
                    <GridActionsCellItem
                        color="inherit"
                        icon={<Edit />}
                        label="Edit"
                        onClick={() => onEdit(data.id)}
                    />,
                    <GridActionsCellItem
                        color="inherit"
                        icon={<Delete />}
                        label="Delete"
                        onClick={() => onDelete(data.id)}
                    />,
                ];
            },
        },
    ];
};

export default formatedColumns;
