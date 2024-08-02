import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import useFadeMenu from '../useFadeMenu';
import { Divider, Typography } from '@mui/material';
import theme from '../../../../../configs/theme';
import translator from '../../../../../helpers/translator';

const FadeMenu = () => {
    const { anchorEl, handleClick, handleClose } = useFadeMenu();

    const open = Boolean(anchorEl);
    const avatarBackgroundColor = theme.palette.getContrastText(
        theme.palette.primary.main
    );
    const avatarTextColor = theme.palette.getContrastText(
        avatarBackgroundColor
    );

    return (
        <Box>
            <Box
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                <Typography>Dandi Juliandi</Typography>
                <Divider
                    orientation="vertical"
                    sx={{
                        backgroundColor: avatarBackgroundColor,
                        height: '25px',
                    }}
                />
                <Avatar
                    sx={{
                        backgroundColor: avatarBackgroundColor,
                        color: avatarTextColor,
                    }}
                >
                    D
                </Avatar>
            </Box>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>
                    {translator('my_account')}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    {translator('logout')}
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default FadeMenu;
