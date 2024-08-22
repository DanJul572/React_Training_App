import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import Add from '@mui/icons-material/Add';

import {
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
} from '@mui/x-data-grid/components';

import translator from '@/helpers/translator';

import { PropsType } from './types';
import { containerStyle, subContainerStyle } from './styles';

const ToolBar = (props: PropsType) => {
    return (
        <Box sx={containerStyle}>
            <Box sx={subContainerStyle}>
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
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
            </Box>
        </Box>
    );
};

export default ToolBar;
