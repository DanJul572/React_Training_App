import ZTable from '@/components/ZTable';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import translator from '@/helpers/translator';

import columns from './dummies/columns';
import useTransactionList from './hooks';
import { titleStyle } from './styles';

const TransactionList = () => {
    const { displayData, onChangePage, onSort, onFilter } =
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
                enableDeleteButton={false}
                enableDetailButton={false}
                enableEditButton={false}
                id="transaction_id"
                onChangePage={onChangePage}
                onFilter={onFilter}
                onSort={onSort}
                rows={displayData.rows}
            />
        </Box>
    );
};

export default TransactionList;
