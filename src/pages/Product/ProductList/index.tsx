import ZTable from '@/components/ZTable';

import columns from './dummies/columns';
import useProductList from './hooks';

const ProductList = () => {
    const {
        displayData,
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
            rows={displayData.rows}
            id="id"
            count={displayData.count}
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
