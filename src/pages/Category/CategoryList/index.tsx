import ZTable from '@/components/ZTable';

import isAdmin from '@/helpers/isAdmin';

import columns from './constants/columns';
import useCategoryList from './hooks';

const CategoryList = () => {
  const {
    displayData,
    onAdd,
    onChangePage,
    onEdit,
    onSort,
    onFilter,
    openDialog,
  } = useCategoryList();

  return (
    <ZTable
      columns={columns}
      count={displayData.count}
      enableAddButton={isAdmin}
      enableDeleteButton={isAdmin}
      enableEditButton={isAdmin}
      id="id"
      listTitleFormat="name"
      onAdd={onAdd}
      onChangePage={onChangePage}
      onDelete={openDialog}
      onEdit={onEdit}
      onFilter={onFilter}
      onSort={onSort}
      rows={displayData.rows}
    />
  );
};

export default CategoryList;
