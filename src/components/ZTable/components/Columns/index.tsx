import Tooltip from '@mui/material/Tooltip';

import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';

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

    if (
        !params.enableDetailButton &&
        !params.enableDeleteButton &&
        !params.enableEditButton
    ) {
        return mappingColumns;
    }

    return [
        ...mappingColumns,
        {
            field: 'actions',
            type: 'actions',
            headerName: translator('action'),
            cellClassName: 'actions',
            getActions: (data) => {
                const actionButtons = [];
                if (params.enableDetailButton) {
                    actionButtons.push(
                        <GridActionsCellItem
                            color="primary"
                            icon={
                                <Tooltip
                                    title={translator('detail')}
                                    arrow
                                >
                                    <RemoveRedEye />
                                </Tooltip>
                            }
                            label="Detail"
                            onClick={() =>
                                params.onDetail
                                    ? params.onDetail(data.id)
                                    : false
                            }
                        />
                    );
                }

                if (params.enableEditButton) {
                    actionButtons.push(
                        <GridActionsCellItem
                            color="warning"
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
                    actionButtons.push(
                        <GridActionsCellItem
                            color="error"
                            icon={
                                <Tooltip
                                    title={translator('delete')}
                                    arrow
                                >
                                    <Delete />
                                </Tooltip>
                            }
                            label="Delete"
                            onClick={() =>
                                params.onDelete
                                    ? params.onDelete(data.id)
                                    : false
                            }
                        />
                    );
                }

                return actionButtons;
            },
        },
    ];
};

export default Columns;
