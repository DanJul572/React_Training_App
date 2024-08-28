import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { PropsType } from './types';

import { containerStyle } from './styles';

const CardItem = (props: PropsType) => {
    return (
        <Card sx={containerStyle}>
            <Typography variant="subtitle2" color="grey">
                {props.title}
            </Typography>
            <Typography variant="h4">{props.content}</Typography>
        </Card>
    );
};

export default CardItem;
