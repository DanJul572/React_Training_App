import { Typography } from '@mui/material';

const Logo = () => {
    const name = import.meta.env.VITE_APP_NAME || 'ZApp';

    return (
        <Typography
            sx={{
                fontSize: '25px',
                fontWeight: 'bold',
            }}
        >
            {name}
        </Typography>
    );
};

export default Logo;
