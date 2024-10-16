import Box from '@mui/material/Box';

import { ZLoader } from '@/context/ZLoader';

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
            <ZLoader>
                <Topbar />
                <Box sx={sidebarAndContentStyle}>
                    <Sidebar />
                    <Box sx={contentStyle}>{props.children}</Box>
                </Box>
            </ZLoader>
        </Box>
    );
};

export default Main;
