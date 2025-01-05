import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const navigate = useNavigate();

    const onAdd = (): void => {
        navigate('/product/create');
    };
    const onChangePage = (): void => {};
    const onDelete = (): void => {};
    const onEdit = (): void => {};
    const onFilter = (): void => {};
    const onSelect = (): void => {};
    const onSort = (): void => {};

    return {
        onAdd,
        onChangePage,
        onDelete,
        onEdit,
        onFilter,
        onSelect,
        onSort,
    };
};

export default ProductList;
