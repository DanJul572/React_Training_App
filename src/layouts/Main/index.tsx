import Box from '@mui/material/Box';

import { ZAlert } from '@/context/ZAlert';
import { ZConfirmationDialog } from '@/context/ZConfirmationDialog';
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
                <ZConfirmationDialog>
                    <Topbar />
                    <Box sx={sidebarAndContentStyle}>
                        <Sidebar />
                        <Box sx={contentStyle}>
                            <ZAlert>{props.children}</ZAlert>
                        </Box>
                    </Box>
                </ZConfirmationDialog>
            </ZLoader>
        </Box>
    );
};

export default Main;
