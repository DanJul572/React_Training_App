import Tooltip from '@mui/material/Tooltip';

import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Info from '@mui/icons-material/Info';

import { GridActionsCellItem } from '@mui/x-data-grid/components';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

import translator from '@/helpers/translator';

import { PropsType } from './types';

const Columns: PropsType = (params) => {
    const mappingColumns: GridColDef[] = params.columns.map((column) => {
        column.flex = 1;
        column.disableColumnMenu = true;
        return column;
    });

    return [
        ...mappingColumns,
        {
            width: 150,
            field: 'actions',
            type: 'actions',
            headerName: translator('action'),
            cellClassName: 'actions',
            getActions: (data) => {
                const actionButtons = [
                    <GridActionsCellItem
                        color="inherit"
                        icon={
                            <Tooltip title={translator('detail')} arrow>
                                <Info />
                            </Tooltip>
                        }
                        label="Detail"
                        onClick={() => params.onDetail(data.id)}
                    />,
                ];

                if (params.enableEditButton) {
                    actionButtons.push(
                        <GridActionsCellItem
                            color="inherit"
                            icon={
                                <Tooltip title={translator('edit')} arrow>
                                    <Edit />
                                </Tooltip>
                            }
                            label="Edit"
                            onClick={() =>
                                params.onEdit
                                    ? params.onEdit(data.id)
                                    : false
                            }
                        />
                    );
                }

                if (params.enableDeleteButton) {
                    <GridActionsCellItem
                        color="inherit"
                        icon={
                            <Tooltip title={translator('delete')} arrow>
                                <Delete />
                            </Tooltip>
                        }
                        label="Delete"
                        onClick={() =>
                            params.onDelete
                                ? params.onDelete(data.id)
                                : false
                        }
                    />;
                }

                return actionButtons;
            },
        },
    ];
};

export default Columns;
