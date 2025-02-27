import ZTable from '@/components/ZTable';

import columns from './constants/columns';
import rows from './dummies/rows';

import useZTableDemo from './hooks';

const ZTableDemo = () => {
  const {
    onAdd,
    onChangePage,
    onDelete,
    onDetail,
    onEdit,
    onFilter,
    onSelect,
    onSort,
  } = useZTableDemo();

  return (
    <ZTable
      columns={columns}
      count={rows.length}
      enableAddButton={true}
      enableCheckboxSelection={true}
      enableDeleteButton={true}
      enableDetailButton={true}
      enableEditButton={true}
      enableFilterButton={true}
      id="id"
      listTitleFormat="firstName"
      onAdd={onAdd}
      onChangePage={onChangePage}
      onDelete={onDelete}
      onDetail={onDetail}
      onEdit={onEdit}
      onFilter={onFilter}
      onSelect={onSelect}
      onSort={onSort}
      rows={rows}
    />
  );
};

export default ZTableDemo;
