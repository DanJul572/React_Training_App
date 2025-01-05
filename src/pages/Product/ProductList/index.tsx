import ZTable from '@/components/ZTable';

import columns from './dummies/columns';
import rows from './dummies/rows';
import useProductList from './hooks';

const ProductList = () => {
    const {
        onAdd,
        onChangePage,
        onDelete,
        onEdit,
        onFilter,
        onSelect,
        onSort,
    } = useProductList();

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

export default ProductList;
