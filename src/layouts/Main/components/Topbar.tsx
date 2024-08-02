import Box from '@mui/material/Box';

import theme from '../../../configs/theme';

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
                width: '100vw',
                height: '65px',
                padding: '10px',
            }}
        >
            <span className="topbar">ZApp</span>
        </Box>
    );
};

export default Topbar;
