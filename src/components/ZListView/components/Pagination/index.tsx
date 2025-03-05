import Pagination from '@mui/material/Pagination';

import { GridPaginationModel } from '@mui/x-data-grid';

import table from '@/configs/table';

import usePaginationComponent from './hooks';

import { PropsType } from './types';
import { paginationStyle } from './styles';

const PaginationComponent = (props: PropsType) => {
  const { page, setPage } = usePaginationComponent(props);

  return (
    <Pagination
      count={Math.ceil(props.count / table.pageSize)}
      page={props.initialPage || page}
      onChange={(_, value) => {
        const pageValue: GridPaginationModel = {
          pageSize: table.pageSize,
          page: value - 1,
        };
        props.onChangePage(pageValue);
        setPage(value);
      }}
      color="primary"
      style={paginationStyle}
    />
  );
};

export default PaginationComponent;
