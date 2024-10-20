import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { containerStyle } from './styles';
import { ShowAlertType } from '../../types';

const AlertMessage = (props: ShowAlertType) => {
    if (!props.isShow || !props.message) return false;

    return (
        <Box sx={containerStyle}>
            <Alert severity={props.type}>
                {props.message && <AlertTitle>{props.message}</AlertTitle>}
                {props.data && (
                    <List dense={true} disablePadding={true}>
                        {props.data.map((error, index) => {
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

export default AlertMessage;
