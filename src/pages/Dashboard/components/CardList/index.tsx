import Grid from '@mui/material/Grid';

import CardItem from '../CardItem';

import cards from './dummies/cards';

import { containerStyle } from './styles';

const CardList = () => {
    return (
        <Grid container spacing="10px" sx={containerStyle}>
            {cards.map((card, index) => (
                <Grid key={index} item xs={6}>
                    <CardItem title={card.title} content={card.content} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CardList;
