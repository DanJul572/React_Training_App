import Box from '@mui/material/Box';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

import { Props } from './types';

import {
    containerStyle,
    contentStyle,
    sidebarAndContentStyle,
} from './styles';

const Main = (props: Props) => {
    return (
        <Box sx={containerStyle}>
            <Topbar />
            <Box sx={sidebarAndContentStyle}>
                <Sidebar />
                <Box sx={contentStyle}>{props.children}</Box>
            </Box>
        </Box>
    );
};

export default Main;
