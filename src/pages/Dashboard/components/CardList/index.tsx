import Grid from '@mui/material/Grid';

import CardItem from '../CardItem';

import useCardList from './hooks';
import { containerStyle } from './styles';
import translator from '@/helpers/translator';

const CardList = () => {
  const { dataCount } = useCardList();
  return (
    <Grid container spacing="10px" sx={containerStyle}>
      <Grid size={6}>
        <CardItem
          title={translator('product')}
          content={dataCount.productCount.toString()}
        />
      </Grid>
      <Grid size={6}>
        <CardItem
          title={translator('user')}
          content={dataCount.userCount.toString()}
        />
      </Grid>
    </Grid>
  );
};

export default CardList;
