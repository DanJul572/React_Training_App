import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import useProductDetail from './hooks';
import { captionContainerStyle, sizeContainerStyle } from './styles';

const ProductProduct = () => {
    const { product, getProduct, onBack } = useProductDetail();

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h4">{product.name}</Typography>
                <Box sx={sizeContainerStyle}>
                    <Typography variant="h2">{product.stock}</Typography>
                    <Typography variant="subtitle1">
                        {product.size}
                    </Typography>
                </Box>
                <Box sx={captionContainerStyle}>
                    <Typography variant="caption">
                        {product.surface}
                    </Typography>
                    <Typography variant="caption">
                        {product.type}
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
