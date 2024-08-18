import theme from '@/configs/theme';
import { SxProps, Theme } from '@mui/material/styles';

export const containerStyle: SxProps<Theme> = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    height: '65px',
    paddingBlock: '10px',
    paddingInline: '20px',
};
