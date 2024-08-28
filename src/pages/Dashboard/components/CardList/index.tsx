import Grid2 from '@mui/material/Grid2';

import CardItem from '../CardItem';

import cards from './dummies/cards';

import { containerStyle } from './styles';

const CardList = () => {
    return (
        <Grid2 container spacing="10px" sx={containerStyle}>
            {cards.map((card, index) => (
                <Grid2 key={index} size={6}>
                    <CardItem title={card.title} content={card.content} />
                </Grid2>
            ))}
        </Grid2>
    );
};

export default CardList;
