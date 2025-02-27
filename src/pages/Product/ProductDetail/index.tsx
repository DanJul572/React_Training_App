import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import isAdmin from '@/helpers/isAdmin';
import translator from '@/helpers/translator';

import useProductDetail from './hooks';
import {
  buttonContainerStyle,
  captionContainerStyle,
  descriptionContainerStyle,
  imageContainerStyle,
  imageStyle,
  noImageStyle,
  sizeContainerStyle,
} from './styles';

const ProductProduct = () => {
  const { product, getProduct, onBack } = useProductDetail();

  if (!product) {
    return false;
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Box>
          <Box sx={imageContainerStyle}>
            {product.image && (
              <img
                style={imageStyle}
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
            <Typography variant="h5">
              {product.name} - {product.type}
            </Typography>
            <Box sx={sizeContainerStyle}>
              <Typography variant="h2">{product.stock}</Typography>
            </Box>
            <Box sx={captionContainerStyle}>
              <Typography variant="caption">{product.surface}</Typography>
              <Typography variant="caption">{product.size}</Typography>
              <Typography variant="caption">
                {product.category.name}
              </Typography>
            </Box>
            {isAdmin && (
              <Box sx={captionContainerStyle}>
                <Typography variant="caption">
                  {`${translator('price')} 1 : `}
                  {product.price_1}
                </Typography>
                <Typography variant="caption">
                  {`${translator('price')} 2 : `}
                  {product.price_2}
                </Typography>
              </Box>
            )}
            <Box sx={buttonContainerStyle}>
              <Button onClick={getProduct} size="small">
                {translator('refresh')}
              </Button>
              <Button onClick={onBack} color="secondary" size="small">
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
