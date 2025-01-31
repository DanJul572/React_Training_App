import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import ExpandLess from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandLess';
import Visibility from '@mui/icons-material/Visibility';

import { actionButtonContainerStyle } from './styles';
import { PropsType } from './types';

const ActionButton = (props: PropsType) => {
    return (
        <Box sx={actionButtonContainerStyle}>
            <IconButton
                color="info"
                onClick={() => props.toggleExpand(props.item[props.id])}
            >
                {props.expanded[props.item[props.id]] ? (
                    <ExpandLess />
                ) : (
                    <ExpandMore />
                )}
            </IconButton>
            {props.enableDetailButton && (
                <IconButton
                    color="primary"
                    onClick={() => props.onDetail?.(props.item[props.id])}
                >
                    <Visibility />
                </IconButton>
            )}
            {props.enableEditButton && (
                <IconButton
                    color="warning"
                    onClick={() => props.onEdit?.(props.item[props.id])}
                >
                    <Edit />
                </IconButton>
            )}
            {props.enableDeleteButton && (
                <IconButton
                    color="error"
                    onClick={() => props.onDelete?.(props.item[props.id])}
                >
                    <Delete />
                </IconButton>
            )}
        </Box>
    );
};

export default ActionButton;
