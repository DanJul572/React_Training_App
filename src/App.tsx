import Box from '@mui/material/Box';

import Main from './layouts/Main';
const App = () => {
    return (
        <Main>
            <Box data-testid="content">
                <h1>Hello World!</h1>
            </Box>
        </Main>
    );
};

export default App;
