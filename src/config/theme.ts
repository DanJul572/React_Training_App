import { createTheme, PaletteMode } from "@mui/material";

const colorMode: PaletteMode = (import.meta.env.VITE_THEME === 'dark' ? 'dark' : 'light') as PaletteMode;

const theme = createTheme({
    palette: {
        mode: colorMode,
        primary: {
            light: '#cfa3ff',
            main: '#831ef7',
            dark: '#4d0d9e'
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            }
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                InputLabelProps: {
                    shrink: true
                }
            }
        }
    }
})

export default theme;