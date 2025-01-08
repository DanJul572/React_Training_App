import ZTable from '@/components/ZTable';

import columns from './dummies/columns';
import rows from './dummies/rows';
import useZTableDemo from './hooks';

const ZTableDemo = () => {
    const {
        onAdd,
        onChangePage,
        onDelete,
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
            rows={rows}
            onAdd={onAdd}
            onChangePage={onChangePage}
            onDelete={onDelete}
            onEdit={onEdit}
            onFilter={onFilter}
            onSelect={onSelect}
            onSort={onSort}
        />
    );
};

export default ZTableDemo;
