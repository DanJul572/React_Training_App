import ZTable from '@/components/ZTable';

import columns from './dummies/columns';
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
