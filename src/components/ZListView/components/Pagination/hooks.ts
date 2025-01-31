import { useState } from 'react';

const usePaginationComponent = () => {
    const [page, setPage] = useState<number>(1);

    return {
        page,
        setPage,
    };
};

export default usePaginationComponent;
