import Box from '@mui/material/Box';

import CardList from './components/CardList';

import ZTableDemo from '@/demos/ZTableDemo';

const Dashboard = () => {
    return (
        <Box>
            <CardList />
            <ZTableDemo />
        </Box>
    );
};

export default Dashboard;
