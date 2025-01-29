import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import useProductDetail from './hooks';
import {
    buttonContainerStyle,
    captionContainerStyle,
    containerStyle,
    descriptionContainerStyle,
    imageContainerStyle,
    imageStyle,
    noImageStyle,
    sizeContainerStyle,
} from './styles';

const ProductProduct = () => {
    const { product, getProduct, onBack } = useProductDetail();

    return (
        <Card variant="outlined">
            <CardContent>
                <Box sx={containerStyle}>
                    <Box sx={imageContainerStyle}>
                        {product.image && (
                            <img
                                style={imageStyle}
                                height={500}
                                width={500}
                                src={product.image}
                                alt={product.name}
                            />
                        )}
                        {!product.image && (
                            <Box sx={noImageStyle}>
                                <Typography variant="h6">
                                    {translator('no_image')}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                    <Box sx={descriptionContainerStyle}>
                        <Typography variant="h4">
                            {product.name}
                        </Typography>
                        <Box sx={sizeContainerStyle}>
                            <Typography variant="h2">
                                {product.stock}
                            </Typography>
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
                        <Box sx={buttonContainerStyle}>
                            <Button onClick={getProduct} size="small">
                                {translator('refresh')}
                            </Button>
                            <Button
                                onClick={onBack}
                                color="secondary"
                                size="small"
                            >
                                {translator('back')}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductProduct;
