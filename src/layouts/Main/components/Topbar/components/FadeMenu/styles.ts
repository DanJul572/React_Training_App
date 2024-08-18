import theme from '@/configs/theme';
import { SxProps, Theme } from '@mui/material/styles';

const avatarBackgroundColor = theme.palette.getContrastText(
    theme.palette.primary.main
);

const avatarTextColor = theme.palette.getContrastText(
    avatarBackgroundColor
);

export const containerStyle: SxProps<Theme> = {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
};

export const dividerStyle: SxProps<Theme> = {
    backgroundColor: avatarBackgroundColor,
    height: '25px',
};

export const avatarStyle: SxProps<Theme> = {
    backgroundColor: avatarBackgroundColor,
    color: avatarTextColor,
};
