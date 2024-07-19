import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'light',
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