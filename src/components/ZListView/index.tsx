import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import formatObject from '@/helpers/formatObject';

import ActionButton from './components/ActionButton';
import PaginationComponent from './components/Pagination';
import Toolbar from './components/Toolbar';

import { PropsType } from '../ZTable/types';

import useZListView from './hooks';
import {
    cardItemContainerStyle,
    containerStyle,
    descriptionContainerStyle,
    descriptionStyle,
} from './styles';

const ZListView = (props: PropsType) => {
    const { expanded, toggleExpand } = useZListView();

    return (
        <Box sx={containerStyle}>
            <Toolbar
                enableAddButton={props.enableAddButton}
                enableFilterButton={props.enableFilterButton}
                onAdd={props.onAdd}
                onFilter={props.onFilter}
            />
            {props.rows.map((item) => (
                <Card key={item[props.id]} style={cardItemContainerStyle}>
                    <CardContent>
                        <Typography variant="h6">
                            {formatObject(item, props.listTitleFormat)}
                        </Typography>
                        <ActionButton
                            id={props.id}
                            item={item}
                            expanded={expanded}
                            toggleExpand={toggleExpand}
                            enableDeleteButton={props.enableDeleteButton}
                            enableDetailButton={props.enableDetailButton}
                            enableEditButton={props.enableEditButton}
                            onDelete={props.onDelete}
                            onDetail={props.onDetail}
                            onEdit={props.onEdit}
                        />
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
            <PaginationComponent
                count={props.count}
                onChangePage={props.onChangePage}
            />
        </Box>
    );
};

export default ZListView;
