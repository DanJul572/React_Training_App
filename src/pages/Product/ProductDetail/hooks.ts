import { useParams } from 'react-router-dom';

import { ParamsType } from './types';

const useProductDetail = () => {
    const params: ParamsType = useParams();

    return {
        params,
    };
};

export default useProductDetail;
