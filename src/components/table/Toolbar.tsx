import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button';

import Add from '@mui/icons-material/Add';

import { GridToolbarExport } from '@mui/x-data-grid/components/toolbar/GridToolbarExport';
import { GridToolbarFilterButton } from '@mui/x-data-grid/components/toolbar/GridToolbarFilterButton';
import { GridToolbarQuickFilter } from '@mui/x-data-grid/components/toolbar/GridToolbarQuickFilter';

type Props = {
    onAdd: () => void;
};

const ToolBar = (props: Props) => {
    return (
        <Box display="flex" padding={2} justifyContent="space-between">
            <Box display="flex" gap={1}>
                <Button color="primary" startIcon={<Add />} size="small" onClick={props.onAdd}>
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
