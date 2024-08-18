import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Divider, Typography } from '@mui/material';

import useFadeMenu from './hooks';

import translator from '@/helpers/translator';

import { avatarStyle, containerStyle, dividerStyle } from './styles';

const FadeMenu = () => {
    const { anchorEl, handleClick, handleClose } = useFadeMenu();

    const open = Boolean(anchorEl);

    return (
        <Box>
            <Box
                data-testid="FadeMenuButton"
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={containerStyle}
            >
                <Typography>Dandi Juliandi</Typography>
                <Divider orientation="vertical" sx={dividerStyle} />
                <Avatar sx={avatarStyle}>D</Avatar>
            </Box>
            <Menu
                data-testid="FadeMenu"
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
                <MenuItem
                    data-testid="FadeItemMyAccount"
                    onClick={handleClose}
                >
                    {translator('my_account')}
                </MenuItem>
                <MenuItem
                    data-testid="FadeItemLogout"
                    onClick={handleClose}
                >
                    {translator('logout')}
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default FadeMenu;
