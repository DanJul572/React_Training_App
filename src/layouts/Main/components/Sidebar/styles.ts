import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/configs/theme';

export const containerStyle: SxProps<Theme> = {
    padding: '10px',
    flex: 1,
    borderRight: 1,
    borderColor: theme.palette.divider,
    overflowX: 'hidden',
};

export const treeViewStyle: SxProps<Theme> = {
    overflowX: 'hidden',
    minHeight: 270,
    flexGrow: 1,
    maxWidth: 300,
};
