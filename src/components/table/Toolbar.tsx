import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Add from '@mui/icons-material/Add';
import {
    GridToolbarExport,
    GridToolbarFilterButton,
    GridToolbarQuickFilter,
} from '@mui/x-data-grid/components';

type Props = {
    onAdd: () => void;
};

const ToolBar = (props: Props) => {
    return (
        <Box display="flex" padding={2} justifyContent="space-between">
            <Box display="flex" gap={1}>
                <Button
                    color="primary"
                    startIcon={<Add />}
                    size="small"
                    onClick={props.onAdd}
                >
                    Add record
                </Button>
                <GridToolbarFilterButton />
                <GridToolbarExport />
            </Box>
            <GridToolbarQuickFilter />
        </Box>
    );
};

export default ToolBar;
