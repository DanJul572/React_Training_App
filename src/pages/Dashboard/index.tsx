import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ZTableComponent from '@/demos/ZTableComponent';

import CardItem from './components/Card';

import People from '@mui/icons-material/Inventory';
import Inventory from '@mui/icons-material/People';

const Dashboard = () => {
    return (
        <Box>
            <Grid
                container
                spacing="10px"
                sx={{
                    marginBottom: '10px',
                }}
            >
                <Grid item xs={6}>
                    <CardItem
                        title="Users"
                        content="230"
                        icon={<People />}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CardItem
                        title="Products"
                        content="120"
                        icon={<Inventory />}
                    />
                </Grid>
            </Grid>
            <ZTableComponent />
        </Box>
    );
};

export default Dashboard;
