import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import useProductDetail from './hooks';
import { captionContainerStyle } from './styles';

const ProductProduct = () => {
    const { product, getProduct, onBack } = useProductDetail();

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h4">{product.name}</Typography>
                <Typography variant="h2">{product.stock}</Typography>
                <Box sx={captionContainerStyle}>
                    <Typography variant="caption">
                        {product.surface}
                    </Typography>
                    <Typography variant="caption">
                        {product.type}
                    </Typography>
                    <Typography variant="caption">
                        {product.size}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button onClick={getProduct} size="small">
                    {translator('refresh')}
                </Button>
                <Button onClick={onBack} color="secondary" size="small">
                    {translator('back')}
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductProduct;
