import ZTable from '@/components/ZTable';

import columns from './dummies/columns';
import rows from './dummies/rows';
import useZTableComponent from './hooks';

const ZTableComponent = () => {
    const {
        onAdd,
        onChangePage,
        onDelete,
        onEdit,
        onFilter,
        onSelect,
        onSort,
    } = useZTableComponent();

    return (
        <ZTable
            columns={columns}
            rows={rows}
            id="id"
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

export default ZTableComponent;
