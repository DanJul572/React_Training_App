import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

import ZTable from '@/components/ZTable';

import isAdmin from '@/helpers/isAdmin';
import translator from '@/helpers/translator';

import columns from './constants/columns';
import useProductList from './hooks';

import { containerStyle, tableContainerStyle } from './styles';

const ProductList = () => {
  const {
    displayData,
    onAdd,
    onChangePage,
    onDetail,
    onEdit,
    onFilter,
    onSort,
    onWithoutImageChange,
    openDialog,
    tableProperty,
  } = useProductList();

  return (
    <Box sx={containerStyle}>
      <FormGroup>
        <FormControlLabel
          checked={tableProperty.isWithoutImage}
          control={<Switch />}
          label={translator('show_product_without_image')}
          labelPlacement="start"
          onChange={onWithoutImageChange}
        />
      </FormGroup>
      <Box sx={tableContainerStyle}>
        <ZTable
          columns={columns}
          count={displayData.count}
          enableAddButton={isAdmin}
          enableDeleteButton={isAdmin}
          enableDetailButton={true}
          enableEditButton={isAdmin}
          id="id"
          listTitleFormat="product_name - type"
          onAdd={onAdd}
          onChangePage={onChangePage}
          onDelete={openDialog}
          onDetail={onDetail}
          onEdit={onEdit}
          onFilter={onFilter}
          onSort={onSort}
          rows={displayData.rows}
        />
      </Box>
    </Box>
  );
};

export default ProductList;
