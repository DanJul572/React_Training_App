import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import formatObject from '@/helpers/formatObject';

import ActionButton from './components/ActionButton';
import Description from './components/Description';
import PaginationComponent from './components/Pagination';
import Toolbar from './components/Toolbar';

import { PropsType } from '../ZTable/types';

import useZListView from './hooks';
import { cardItemContainerStyle, containerStyle } from './styles';

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
                        <Description
                            columns={props.columns}
                            expanded={expanded}
                            id={props.id}
                            item={item}
                        />
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
