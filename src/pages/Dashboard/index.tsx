import Box from '@mui/material/Box';

import CardList from './components/CardList';

import TransactionList from '../Transaction/TransactionList';

const Dashboard = () => {
  return (
    <Box>
      <CardList />
      <TransactionList />
    </Box>
  );
};

export default Dashboard;
