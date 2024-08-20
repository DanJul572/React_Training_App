import Box from '@mui/material/Box';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

import { PropsType } from './types';

import {
    containerStyle,
    contentStyle,
    sidebarAndContentStyle,
} from './styles';

const Main = (props: PropsType) => {
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
