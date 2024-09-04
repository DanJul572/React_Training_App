import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import logo from '@public/logo.svg';

import { containerStyle } from './styles';

const Logo = () => {
    const name = import.meta.env.VITE_APP_NAME || 'ZApp';

    return (
        <Box sx={containerStyle}>
            <img src={logo} height="25px" />
            <Typography
                sx={{
                    fontSize: '25px',
                    fontWeight: 'bold',
                }}
                data-testid="logo"
            >
                {name}
            </Typography>
        </Box>
    );
};

export default Logo;
