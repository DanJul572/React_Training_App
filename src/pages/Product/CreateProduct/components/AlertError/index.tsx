import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { ErrorResponse } from '@/types/errorResponse';

import { containerStyle } from './styles';

const AlertError = (props: ErrorResponse) => {
    if (!props.error) return false;

    return (
        <Box sx={containerStyle}>
            <Alert severity="error">
                {props.error && <AlertTitle>{props.error}</AlertTitle>}
                {props.message && (
                    <List dense={true} disablePadding={true}>
                        {props.message.map((error, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    disablePadding={true}
                                >
                                    <ListItemText>{error}</ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                )}
            </Alert>
        </Box>
    );
};

export default AlertError;
