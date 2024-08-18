import { SxProps, Theme } from '@mui/material/styles';

export const containerStyle: SxProps<Theme> = {
    height: '100vh',
    overflow: 'hidden',
};

export const sidebarAndContentStyle: SxProps<Theme> = {
    display: 'flex',
    height: 'calc(100vh - 65px)',
};

export const contentStyle: SxProps<Theme> = {
    overflowX: 'hidden',
    flex: 5,
    padding: '10px',
};
