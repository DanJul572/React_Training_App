import ZTable from '@/components/ZTable';

import columns from './dummies/columns';
import useProductList from './hooks';

const ProductList = () => {
    const {
        displayData,
        onAdd,
        onChangePage,
        onEdit,
        onFilter,
        onSelect,
        onSort,
        openDialog,
    } = useProductList();

    return (
        <ZTable
            columns={columns}
            count={displayData.count}
            id="id"
            onAdd={onAdd}
            onChangePage={onChangePage}
            onDelete={openDialog}
            onEdit={onEdit}
            onFilter={onFilter}
            onSelect={onSelect}
            onSort={onSort}
            rows={displayData.rows}
        />
    );
};

export default ProductList;
