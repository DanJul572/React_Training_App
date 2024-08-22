import { createTheme, PaletteMode } from '@mui/material';

const colorMode: PaletteMode = (import.meta.env.VITE_THEME ||
    'light') as PaletteMode;

const theme = createTheme({
    palette: {
        mode: colorMode,
        primary: {
            light: '#cfa3ff',
            main: '#831ef7',
            dark: '#4d0d9e',
        },
        secondary: {
            light: '#919191',
            main: '#757575',
            dark: '#4a4a4a',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                InputLabelProps: {
                    shrink: true,
                },
            },
        },
        MuiFormControl: {
            defaultProps: {
                fullWidth: true,
            },
        },
        MuiInputLabel: {
            defaultProps: {
                shrink: true,
            },
        },
    },
});

export default theme;
