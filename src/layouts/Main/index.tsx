import Box from '@mui/material/Box';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

import { Props } from './types';

const Main = (props: Props) => {
    return (
        <Box
            sx={{
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            <Topbar />
            <Box
                sx={{
                    display: 'flex',
                    height: 'calc(100vh - 65px)',
                }}
            >
                <Sidebar />
                <Box
                    sx={{ overflowX: 'hidden', flex: 5, padding: '10px' }}
                >
                    {props.children}
                </Box>
            </Box>
        </Box>
    );
};

export default Main;
