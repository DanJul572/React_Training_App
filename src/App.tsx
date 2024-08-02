import Box from '@mui/material/Box';

import ZTableComponent from './demos/ZTableComponent';
import Main from './layouts/Main';

const App = () => {
    return (
        <Main>
            <Box data-testid="content">
                <ZTableComponent />
            </Box>
        </Main>
    );
};

export default App;
