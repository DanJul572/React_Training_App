import { createTheme, PaletteMode } from '@mui/material';

const colorMode: PaletteMode = (import.meta.env.VITE_THEME ||
    'light') as PaletteMode;

const theme = createTheme({
    palette: {
        mode: colorMode,
        primary: {
            main: '#6900d1',
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
                slotProps: {
                    inputLabel: {
                        shrink: true,
                    },
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
        MuiAlert: {
            defaultProps: {
                variant: 'outlined',
            },
        },
    },
});

export default theme;
