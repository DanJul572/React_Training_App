import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { containerButtonStyle } from './styles';
import { PropsType } from './types';

const ActionButton = (props: PropsType) => {
    return (
        <Box sx={containerButtonStyle}>
            <Button
                type="button"
                color="secondary"
                onClick={props.handleClear}
            >
                Clear
            </Button>
            <Button type="submit">Submit</Button>
        </Box>
    );
};

export default ActionButton;
