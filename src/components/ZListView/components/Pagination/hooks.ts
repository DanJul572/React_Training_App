import { useState } from 'react';

import { PropsType } from './types';

const usePaginationComponent = (props: PropsType) => {
  const [page, setPage] = useState<number>(props.initialPage || 1);

  return {
    page,
    setPage,
  };
};

export default usePaginationComponent;
