import Grid2 from '@mui/material/Grid2';

import CardItem from '../CardItem';

import useCardList from './hooks';
import { containerStyle } from './styles';
import translator from '@/helpers/translator';

const CardList = () => {
    const { dataCount } = useCardList();
    return (
        <Grid2 container spacing="10px" sx={containerStyle}>
            <Grid2 size={6}>
                <CardItem
                    title={translator('product')}
                    content={dataCount.productCount.toString()}
                />
            </Grid2>
            <Grid2 size={6}>
                <CardItem
                    title={translator('user')}
                    content={dataCount.userCount.toString()}
                />
            </Grid2>
        </Grid2>
    );
};

export default CardList;
