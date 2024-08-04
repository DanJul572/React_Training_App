import Box from '@mui/material/Box';

import Main from './layouts/Main';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <Main>
            <Box data-testid="content">
                <Dashboard />
            </Box>
        </Main>
    );
};

export default App;
