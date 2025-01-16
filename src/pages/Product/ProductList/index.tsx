import ZTable from '@/components/ZTable';

import columns from './dummies/columns';
import useProductList from './hooks';

const ProductList = () => {
    const {
        displayData,
        onAdd,
        onChangePage,
        onDetail,
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
            onDetail={onDetail}
            onEdit={onEdit}
            onFilter={onFilter}
            onSelect={onSelect}
            onSort={onSort}
            rows={displayData.rows}
        />
    );
};

export default ProductList;
