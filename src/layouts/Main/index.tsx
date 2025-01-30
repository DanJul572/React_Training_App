import Box from '@mui/material/Box';

import { ZAlert } from '@/context/ZAlert';
import { ZConfirmationDialog } from '@/context/ZConfirmationDialog';
import { ZLoader } from '@/context/ZLoader';

import Sidebar from './components/Sidebar';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import Topbar from './components/Topbar';

import { PropsType } from './types';

import {
    containerStyle,
    contentStyle,
    sidebarAndContentStyle,
} from './styles';

const Main = (props: PropsType) => {
    const isLogined = localStorage.getItem('token');

    if (!isLogined) {
        return false;
    }

    return (
        <Box sx={containerStyle}>
            <ZLoader>
                <ZConfirmationDialog>
                    <Topbar />
                    <Box sx={sidebarAndContentStyle}>
                        <Sidebar />
                        <Box sx={contentStyle}>
                            <ZAlert>{props.children}</ZAlert>
                        </Box>
                    </Box>
                    <SimpleBottomNavigation />
                </ZConfirmationDialog>
            </ZLoader>
        </Box>
    );
};

export default Main;
