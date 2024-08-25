import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { PropsType } from './types';

import theme from '@/configs/theme';

const StoryBook = (props: PropsType) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );
};

export default StoryBook;
