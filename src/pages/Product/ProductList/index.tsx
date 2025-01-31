import ZTable from '@/components/ZTable';

import isAdmin from '@/helpers/isAdmin';

import columns from './dummies/columns';
import useProductList from './hooks';

const ProductList = () => {
    const {
        displayData,
        onAdd,
        onChangePage,
        onDetail,
        onEdit,
        onSort,
        onFilter,
        openDialog,
    } = useProductList();

    return (
        <ZTable
            columns={columns}
            count={displayData.count}
            enableAddButton={isAdmin}
            enableDeleteButton={isAdmin}
            enableDetailButton={true}
            enableEditButton={isAdmin}
            id="id"
            listTitleFormat="name - type"
            onAdd={onAdd}
            onChangePage={onChangePage}
            onDelete={openDialog}
            onDetail={onDetail}
            onEdit={onEdit}
            onFilter={onFilter}
            onSort={onSort}
            rows={displayData.rows}
        />
    );
};

export default ProductList;
