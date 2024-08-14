import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { Props } from './types';

const CardItem = (props: Props) => {
    return (
        <Card
            sx={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box>
                <Typography variant="subtitle2" color="grey">
                    {props.title}
                </Typography>
                <Typography variant="h4">{props.content}</Typography>
            </Box>
            {props.icon}
        </Card>
    );
};

export default CardItem;
