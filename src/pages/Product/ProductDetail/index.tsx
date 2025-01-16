import Box from '@mui/material/Box';

import useProductDetail from './hooks';

const ProductProduct = () => {
    const { params } = useProductDetail();

    return <Box>{params.id}</Box>;
};

export default ProductProduct;
