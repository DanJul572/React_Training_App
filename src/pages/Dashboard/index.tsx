import Box from '@mui/material/Box';

import CardList from './components/CardList';

import ZTableComponent from '@/demos/ZTableComponent';

const Dashboard = () => {
    return (
        <Box>
            <CardList />
            <ZTableComponent />
        </Box>
    );
};

export default Dashboard;
