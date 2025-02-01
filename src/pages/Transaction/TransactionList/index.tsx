import ZTable from '@/components/ZTable';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';
import isAdmin from '@/helpers/isAdmin';

import columns from './dummies/columns';
import useTransactionList from './hooks';
import { titleStyle } from './styles';

const TransactionList = () => {
    const { displayData, onChangePage, onSort, onFilter, openDialog } =
        useTransactionList();

    return (
        <Box>
            <Typography variant="h6" sx={titleStyle}>
                {translator('transaction_list')}
            </Typography>
            <ZTable
                columns={columns}
                count={displayData.count}
                enableAddButton={false}
                enableDeleteButton={isAdmin}
                enableDetailButton={false}
                enableEditButton={false}
                id="transaction_id"
                listTitleFormat="product_name - transaction_count"
                onChangePage={onChangePage}
                onDelete={openDialog}
                onFilter={onFilter}
                onSort={onSort}
                rows={displayData.rows}
            />
        </Box>
    );
};

export default TransactionList;
