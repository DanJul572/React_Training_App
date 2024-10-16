import { createTheme, PaletteMode } from '@mui/material';

const colorMode: PaletteMode = (import.meta.env.VITE_THEME ||
    'light') as PaletteMode;

const theme = createTheme({
    palette: {
        mode: colorMode,
        primary: {
            main: '#C0C0C0',
        },
        secondary: {
            main: '#71706E',
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
