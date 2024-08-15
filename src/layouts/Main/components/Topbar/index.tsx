import Box from '@mui/material/Box';

import theme from '@/configs/theme';

import FadeMenu from './components/FadeMenu';
import Logo from './components/Logo';

const Topbar = () => {
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.getContrastText(
                    theme.palette.primary.main
                ),
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100vw',
                height: '65px',
                paddingBlock: '10px',
                paddingInline: '20px',
            }}
        >
            <Logo />
            <FadeMenu />
        </Box>
    );
};

export default Topbar;
