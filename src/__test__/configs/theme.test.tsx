import { ThemeProvider, Typography } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import theme from '../../configs/theme';

describe('theme', () => {
    it('render', () => {
        render(
            <ThemeProvider theme={theme}>
                <Typography>Hello</Typography>
            </ThemeProvider>
        );

        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
});
