import ZTable from '@/components/ZTable';

import columns from './dummies/columns';
import useProductList from './hooks';

const ProductList = () => {
    const {
        displayData,
        isAdmin,
        onAdd,
        onChangePage,
        onDetail,
        onEdit,
        onSort,
        openDialog,
    } = useProductList();

    return (
        <ZTable
            columns={columns}
            count={displayData.count}
            enableAddButton={isAdmin}
            enableDeleteButton={isAdmin}
            enableEditButton={isAdmin}
            id="id"
            onAdd={onAdd}
            onChangePage={onChangePage}
            onDelete={openDialog}
            onDetail={onDetail}
            onEdit={onEdit}
            onSort={onSort}
            rows={displayData.rows}
        />
    );
};

export default ProductList;
