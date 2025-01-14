import { Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import logo from '/logo.svg';

import useLogin from './hooks';
import { cardStyle, containerStyle, headStyle } from './styles';

const appName = import.meta.env.VITE_APP_NAME;

const Login = () => {
    const { handleSubmit, onSubmit, control } = useLogin();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={containerStyle}>
                <Box sx={headStyle}>
                    <img src={logo} height="25px" />
                    <Typography variant="h6">{appName}</Typography>
                </Box>
                <Card sx={cardStyle} variant="outlined">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field} label="Email" />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Password"
                                type="password"
                            />
                        )}
                    />
                    <Button type="submit" fullWidth>
                        Login
                    </Button>
                </Card>
            </Box>
        </form>
    );
};

export default Login;
