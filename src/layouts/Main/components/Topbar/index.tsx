import Box from '@mui/material/Box';

import FadeMenu from './components/FadeMenu';
import Logo from './components/Logo';

import { containerStyle } from './styles';

const Topbar = () => {
    return (
        <Box sx={containerStyle}>
            <Logo />
            <FadeMenu />
        </Box>
    );
};

export default Topbar;
