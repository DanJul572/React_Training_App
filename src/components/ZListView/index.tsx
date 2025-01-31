import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import ExpandLess from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandLess';
import Visibility from '@mui/icons-material/Visibility';

import { GridPaginationModel } from '@mui/x-data-grid';

import formatObject from '@/helpers/formatObject';
import translator from '@/helpers/translator';

import table from '@/configs/table';

import { PropsType } from '../ZTable/types';

import useZListView from './hooks';
import {
    actionButtonContainerStyle,
    addButtonStyle,
    cardItemContainerStyle,
    containerStyle,
    descriptionContainerStyle,
    descriptionStyle,
    paginationStyle,
} from './styles';

const ZListView = (props: PropsType) => {
    const {
        expanded,
        handleChange,
        page,
        searchTerm,
        setPage,
        toggleExpand,
    } = useZListView(props);

    return (
        <Box sx={containerStyle}>
            <TextField
                placeholder={translator('search') + '...'}
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={handleChange}
            />
            {props.enableAddButton && (
                <Button
                    variant="contained"
                    color="primary"
                    style={addButtonStyle}
                    onClick={props.onAdd}
                >
                    {translator('add_record')}
                </Button>
            )}
            {props.rows.map((item) => (
                <Card key={item[props.id]} style={cardItemContainerStyle}>
                    <CardContent>
                        <Typography variant="h6">
                            {formatObject(item, props.listTitleFormat)}
                        </Typography>
                        <Box sx={actionButtonContainerStyle}>
                            <IconButton
                                color="info"
                                onClick={() =>
                                    toggleExpand(item[props.id])
                                }
                            >
                                {expanded[item[props.id]] ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </IconButton>
                            {props.enableDetailButton && (
                                <IconButton
                                    color="primary"
                                    onClick={() =>
                                        props.onDetail?.(item[props.id])
                                    }
                                >
                                    <Visibility />
                                </IconButton>
                            )}
                            {props.enableEditButton && (
                                <IconButton
                                    color="warning"
                                    onClick={() =>
                                        props.onEdit?.(item[props.id])
                                    }
                                >
                                    <Edit />
                                </IconButton>
                            )}
                            {props.enableDeleteButton && (
                                <IconButton
                                    color="error"
                                    onClick={() =>
                                        props.onDelete?.(item[props.id])
                                    }
                                >
                                    <Delete />
                                </IconButton>
                            )}
                        </Box>
                        <Collapse
                            in={expanded[item[props.id]]}
                            sx={descriptionContainerStyle}
                        >
                            {props.columns.map((column, index) => {
                                return (
                                    <Box key={index} sx={descriptionStyle}>
                                        <Typography variant="caption">
                                            {column.headerName}
                                        </Typography>
                                        <Typography variant="caption">
                                            {item[column.field]}
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Collapse>
                    </CardContent>
                </Card>
            ))}

            <Pagination
                count={Math.ceil(props.count / table.pageSize)}
                page={page}
                onChange={(_, value) => {
                    const pageValue: GridPaginationModel = {
                        pageSize: table.pageSize,
                        page: value - 1,
                    };
                    props.onChangePage(pageValue);
                    setPage(value);
                }}
                color="primary"
                style={paginationStyle}
            />
        </Box>
    );
};

export default ZListView;
