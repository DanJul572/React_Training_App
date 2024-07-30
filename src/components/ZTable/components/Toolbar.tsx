import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import Add from '@mui/icons-material/Add';
import {
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarQuickFilter,
} from '@mui/x-data-grid/components';

import translator from '../../../helpers/translator';

type Props = {
    onAdd: () => void;
};

const ToolBar = (props: Props) => {
    return (
        <Box display="flex" padding={2} justifyContent="space-between">
            <Box display="flex" gap={1}>
                <Tooltip title={translator('add_record')}>
                    <Button
                        color="primary"
                        startIcon={<Add />}
                        size="small"
                        onClick={props.onAdd}
                    >
                        {translator('add_record')}
                    </Button>
                </Tooltip>
                <GridToolbarColumnsButton/>
                <GridToolbarFilterButton />
            </Box>
            <GridToolbarQuickFilter />
        </Box>
    );
};

export default ToolBar;
