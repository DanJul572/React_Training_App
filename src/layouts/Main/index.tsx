import Box from '@mui/material/Box';

import ZLoader from '@/components/ZLoader';
import { ZLoaderContext } from '@/context/ZLoaderContext';

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
            <ZLoaderContext>
                <ZLoader open={true} handleClose={() => {}} />
                <Topbar />
                <Box sx={sidebarAndContentStyle}>
                    <Sidebar />
                    <Box sx={contentStyle}>{props.children}</Box>
                </Box>
            </ZLoaderContext>
        </Box>
    );
};

export default Main;
