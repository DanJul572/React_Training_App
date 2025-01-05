import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import translator from '@/helpers/translator';

import { containerButtonStyle } from './styles';
import { PropsType } from './types';

const ActionButton = (props: PropsType) => {
    return (
        <Box sx={containerButtonStyle}>
            <Button type="button" color="secondary" onClick={props.onBack}>
                {translator('back')}
            </Button>
            <Button
                type="button"
                color="secondary"
                onClick={props.onClear}
            >
                {translator('clear')}
            </Button>
            <Button type="submit">{translator('submit')}</Button>
        </Box>
    );
};

export default ActionButton;
